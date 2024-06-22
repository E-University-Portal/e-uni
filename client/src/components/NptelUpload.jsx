import { useContext, useState } from "react";
import axios from "axios";
import { ThemeContext } from "@/contexts/ThemeProvider";

export default function NptelUpload() {
  const [dragActive, setDragActive] = useState(false);
  const { toggle } = useContext(ThemeContext);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    uploadFile(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    uploadFile(file);
  };

  const uploadFile = async (file) => {
    const allowedTypes = ["application/pdf"];
    if (!file || !allowedTypes.includes(file.type)) {
      console.error("Please upload a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("File uploaded successfully!", response);
      // Handle success, if needed
      window.location.href = response.data.link;
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle error, if needed
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <form
        className="bg-primary-foreground p-8 rounded-lg shadow-lg"
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <div className="mb-6 text-center">
          <div className="mb-4">
            <img
              src={
                !toggle ? "/certificate-icon.svg" : "/certificate-icon-dark.svg"
              }
              alt="Upload Icon"
              className="mx-auto h-12 w-12"
            />
          </div>
          <label
            htmlFor="file-upload"
            className="relative inline-block cursor-pointer rounded-md bg-primary py-2 px-4 font-semibold text-primary-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-primary focus-within:ring-offset-2 hover:bg-indigo-primary"
          >
            <span>Upload NPTEL Certificate</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
              onChange={handleFileChange}
            />
          </label>
          <p className="mt-2 text-secondary-foreground">or drag and drop</p>
        </div>
        <div
          className={`border-2 border-dashed rounded-lg p-6 ${
            dragActive ? "border-primary" : "border-secondary-foreground/40"
          }`}
        >
          <p className="text-gray-600 dark:text-gray-400 text-center">
            Drag & Drop your file here
          </p>
        </div>
        <p className="mt-4 text-xs text-gray-500 text-center">PDF up to 10MB</p>
      </form>
    </div>
  );
}
