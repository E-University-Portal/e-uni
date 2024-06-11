import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NptelUpload() {
  const [dragActive, setDragActive] = useState(false);
  const navigate = useNavigate();

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
    <div className="flex items-center justify-center w-full h-full dark:bg-blue-900">
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
              src="/certificate-icon.svg"
              alt="Upload Icon"
              className="mx-auto h-12 w-12"
            />
          </div>
          <label
            htmlFor="file-upload"
            className="relative inline-block cursor-pointer rounded-md bg-primary py-2 px-4 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-primary focus-within:ring-offset-2 hover:bg-indigo-primary"
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
          <p className="mt-2 text-gray-primary">or drag and drop</p>
        </div>
        <div
          className={`border-2 border-dashed rounded-lg p-6 ${
            dragActive ? "border-primary" : "border-gray-primary"
          }`}
        >
          <p className="text-gray-500 text-center">
            Drag & Drop your file here
          </p>
        </div>
        <p className="mt-4 text-xs text-gray-600 text-center">PDF up to 10MB</p>
      </form>
    </div>
  );
}
