// import { Link } from "react-router-dom";
// import NavLinks from "./NavLinks";
// import { useState } from "react";
// export default function Navbar() {
//   const [collapsed, setCollapsed] = useState(true);

//   const handleToggle = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <>
//       <div
//         className={`${
//           collapsed ? "w-[5dvw]" : "w-[15dvw]"
//         } bg-[#73A8FF]  h-full fixed top-0 left-0 flex flex-col items-center justify-between tr
//         ansition-width duration-300`}
//       >
//         <div className="w-full">
//           <Link
//             to="/"
//             className="h-fit flex justify-center items-center mt-4 mb-6"
//           >
//             <img src="/logo-black.svg" className="h-[2.5dvw]" />
//           </Link>
//           <NavLinks />
//         </div>
//         <div
//           to="/"
//           className="h-fit flex justify-center rounded-full items-center my-4"
//         >
//           <Link to="/profile">
//             <img src="/profile.svg" className="w-[2.5dvw]" />
//           </Link>
//         </div>
//       </div>
//       <div className="w-full flex md:hidden h-[7.5dvh] bg-[#73A8FF] fixed bottom-0 left-0">
//         Wink
//       </div>
//     </>
//   );
// }
import { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, ArrowLeftToLine } from "lucide-react";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div
        className={`h-full fixed left-0 top-0 bg-primary flex flex-col items-center justify-between transition-all duration-150 ${
          isCollapsed ? "w-[5dvw]" : "w-[15dvw]"
        }`}
      >
        <Link to="/" className="h-fit flex justify-center items-center">
          <img
            src="/logo-white.svg"
            className={`transition-transform duration-200 ${
              isCollapsed
                ? "w-10 h-10 ml-5 mt-2"
                : "h-[3dvw] mt-2 mb-1 ml-8 mr-8"
            }`}
          />
        </Link>

        <div className="w-full flex flex-col items-center space-y-6">
          <div>
            <Link
              to="/dashboard"
              className="w-full flex flex-col items-center justify-center h-[5dvw] text-white hover:bg-blue-700 rounded-md transition-colors duration-200"
            >
              <LayoutDashboard
                className={`transition-transform duration-200 ${
                  isCollapsed
                    ? "w-10 h-10 ml-5 mr-5"
                    : "w-[3dvw] h-[3dvw] mb-1 ml-8 mr-8"
                }`}
              />
              {!isCollapsed && (
                <span className="text-md ml-7 mr-7">Dashboard</span>
              )}
            </Link>
          </div>

          <div>
            <Link
              to="/nptel"
              className="w-full flex flex-col items-center justify-center h-[5dvw] text-white hover:bg-blue-700  rounded-md transition-colors duration-200"
            >
              <img
                src="/nptel-logo.svg"
                className={`transition-transform duration-200 ${
                  isCollapsed
                    ? "w-10 h-10 ml-5 mr-5"
                    : "w-[3dvw] h-[3dvw] mb-1 ml-8 mr-8"
                }`}
              />
              {!isCollapsed && <span className="text-md ml-7 mr-7">NPTEL</span>}
            </Link>
          </div>
        </div>

        <div className="w-full pt-4 mt-6 flex justify-center items-center">
          <Link
            to="/profile"
            className="h-fit flex justify-center items-center"
          >
            <img
              src="/profile.svg"
              className={`transition-transform duration-200 ${
                isCollapsed
                  ? "w-10 h-10 ml-5 mr-5"
                  : "w-[3dvw] h-[3dvw] mb-1 ml-8 mr-8"
              }`}
            />
          </Link>
        </div>

        <div className="w-full border-t border-gray-300 pt-4 mt-6 flex justify-center items-center">
          <button
            onClick={toggleNavbar}
            className="text-white p-2 focus:outline-none"
          >
            <ArrowLeftToLine
              className={`w-6 h-6 duration-200 transition-transform ${isCollapsed && "rotate-180"}`}
            />
          </button>
        </div>
      </div>
    </>
  );
}
