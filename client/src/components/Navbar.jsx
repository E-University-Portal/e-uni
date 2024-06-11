import { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, ArrowLeftToLine, FileBox } from "lucide-react";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 bg-primary h-full flex flex-col justify-between transition-all duration-150 ${
          isCollapsed ? "w-[5dvw]" : "w-[12dvw]"
        }`}
      >
        <Link to="/" className="flex justify-center items-center h-fit">
          <img
            src="/logo-white.svg"
            className={`${
              isCollapsed
                ? "w-5 h-5 ml-5 mr-5 mt-2 transition-transform duration-200"
                : "w-[5dvw] h-[5dvw] mt-2 mb-1 ml-8 mr-8 transition-transform duration-200"
            }`}
          />
        </Link>

        <div className="w-full flex flex-col items-center space-y-4">
          <Link
            to="/"
            className="flex flex-row space-x-2 items-center justify-center w-full h-[5dvw] text-white hover:bg-blue-700 rounded-md transition-colors duration-200"
          >
            <LayoutDashboard
              color="white"
              className={`${
                isCollapsed
                  ? "w-5 h-5 ml-5 mr-5 transition-transform duration-200"
                  : "h-[2dvw] w-[2dvw] transition-transform duration-200"
              }`}
            />
            {!isCollapsed && (
              <span className=" ml-4 mr-0 text-md">Dashboard</span>
            )}
          </Link>

          <Link
            to="/nptel"
            className="flex flex-row space-x-2 items-center justify-center w-full h-[5dvw] text-white hover:bg-blue-700 rounded-md transition-colors duration-200"
          >
            <FileBox
              color="white"
              className={`${
                isCollapsed
                  ? "w-5 h-5 ml-5 mr-5 transition-transform duration-200"
                  : "h-[2dvw] w-[2dvw] ml-0 mr-6 transition-transform duration-200"
              }`}
            />
            {!isCollapsed && <span className=" ml-2 mr-0 text-md">NPTEL</span>}
          </Link>
        </div>

        {/* <div className="w-full pt-4 mt-6 flex justify-center items-center">
          <Link
            to="/profile"
            className="flex justify-center items-center h-fit"
          >
            <img
              src="/profile.svg"
              className={`${
                isCollapsed
                  ? "w-5 h-5 ml-5 mr-5 transition-transform duration-200"
                  : "w-[3dvw] h-[3dvw] mb-1 ml-8 mr-8 transition-transform duration-200"
              }`}
            />
          </Link>
        </div> */}

        <div className="w-full border-t border-gray-300 pt-4 mt-6 flex justify-center items-center">
          <button
            onClick={toggleNavbar}
            className="text-white p-2 focus:outline-none"
          >
            <ArrowLeftToLine
              color="white"
              className={`w-4 h-4 duration-200 transition-transform ${
                isCollapsed && "rotate-180"
              }`}
            />
          </button>
        </div>
      </div>
    </>
  );
}
