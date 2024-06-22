import { Link } from "react-router-dom";
import { LayoutDashboard, ArrowLeftToLine, FileBox } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeProvider";
import { Button } from "./ui/button";

// eslint-disable-next-line react/prop-types
export default function Navbar({ isCollapsed, setIsCollapsed }) {
  const { toggle } = useContext(ThemeContext);
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
            src={!toggle ? "/logo-white.svg" : "/logo-black.svg"}
            className={`${
              isCollapsed
                ? "w-8 h-8 ml-5 mr-5 mt-2 transition-transform duration-200"
                : "w-[5dvw] h-[5dvw] mt-2 mb-1 ml-8 mr-8 transition-transform duration-200"
            }`}
          />
        </Link>

        <div className="w-full flex flex-col items-center space-y-4">
          <Link
            to="/"
            className="flex flex-row space-x-2 items-center justify-center h-[5dvw] text-accent hover:bg-blue-700 rounded-md transition-colors duration-200"
          >
            <LayoutDashboard
              className={`${
                isCollapsed
                  ? "ml-5 mr-5 transition-transform duration-200"
                  : "h-[2dvw] w-[2dvw] transition-transform duration-200"
              }`}
            />
            {!isCollapsed && (
              <span
                className={`ml-2 mr-0 text-md transition-transform duration-300`}
              >
                Dashboard
              </span>
            )}
          </Link>
          <Link
            to="/nptel"
            className="flex flex-row space-x-2 items-center justify-center h-[5dvw] text-accent hover:bg-blue-700 rounded-md transition-colors duration-200"
          >
            <FileBox
              className={`${
                isCollapsed
                  ? "ml-5 mr-5 transition-transform duration-200"
                  : "h-[2dvw] w-[2dvw] ml-0 mr-6 transition-transform duration-200"
              }`}
            />
            {!isCollapsed && (
              <span
                className={`ml-2 mr-0 text-md transition-transform duration-300`}
              >
                NPTEL
              </span>
            )}
          </Link>
        </div>
        <div className="w-full text-center">
          <Button
            onClick={toggleNavbar}
            className="text-accent focus:outline-none hover:bg-blue-700 dark:hover:bg-blue-600 w-full mt-4 rounded-none transition-colors duration-200"
          >
            <ArrowLeftToLine
              className={`w-4 h-4 duration-200 transition-transform ${
                isCollapsed && "rotate-180"
              }`}
            />
          </Button>
        </div>
      </div>
    </>
  );
}
