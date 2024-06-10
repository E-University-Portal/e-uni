import { useState } from "react";

export default function NptelUpload() {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = e.dataTransfer.files;
    console.log(files);
  };

  return (
    
    <div className="flex items-center justify-center w-full h-full bg-gray-primary">
      <form
        className="bg-white p-8 rounded-lg shadow-lg"
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <div className="mb-6 text-center">
          <div className="mb-4">
            <img
              src="./certificate-icon.svg"
              alt="Upload Icon"
              className="mx-auto h-12 w-12"
            />
          </div>
          <label
            htmlFor="file-upload"
            className="relative inline-block cursor-pointer rounded-md bg-indigo-600 py-2 px-4 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-primary focus-within:ring-offset-2 hover:bg-indigo-primary"
          >
            <span>Upload NPTEL Certificate</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
            />
          </label>
          <p className="mt-2 text-gray-primary">or drag and drop</p>
        </div>
        <div
          className={`border-2 border-dashed rounded-lg p-6 ${
            dragActive ? "border-indigo-primary" : "border-gray-primary"
          }`}
        >
          <p className="text-gray-500 text-center">Drag & Drop your file here</p>
        </div>
        <p className="mt-4 text-xs text-gray-600 text-center">PDF up to 10MB</p>
      </form>
    </div>
  );
}
