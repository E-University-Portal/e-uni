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
import { Link } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <div className="h-full w-[7.5dvw] fixed left-0 top-0 bg-primary flex flex-col items-start justify-between">
        <div className="w-full border-b border-gray-300 mb-6">
          <Link
            to="/"
            className="h-fit flex justify-center items-center mt-2 mb-6"
          >
            <img src="/logo-white.svg" className="h-[3dvw] mt-2" />
          </Link>
        </div>

        <div className="flex-grow w-full">
          <div className="w-full  mb-6 flex flex-row justify-center items-center h-[5dvw]">
            <LayoutDashboard className="w-[3dvw] h-[3dvw]" />
            <span>Dashboard</span>
          </div>

          <div className="w-full  mb-6 flex flex-row justify-center items-center h-[5dvw]">
            <img src="/nptel-logo.svg" className="w-[3dvw] h-[3dvw]" />
            <span>NPTEL</span>
          </div>
        </div>

        <div className="h-fit w-full flex justify-center items-center mb-6">
          <Link to="/profile">
            <img src="/profile.svg" className="w-[3dvw] h-[3dvw]" />
          </Link>
        </div>
      </div>
    </>
  );
}
