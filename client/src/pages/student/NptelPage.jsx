import { useState } from "react";
import { ChevronLeft, LayoutDashboard } from "lucide-react";
import Navbar from "@/components/Navbar";
// function NptelPage() {
//   const [open, setOpen] = useState(true);
//   const Menus = [
//     { title: "Dashboard", icon: <LayoutDashboard /> },
//     {
//       title: "NPTEL",
//       icon: <img src="../public/nptel-logo.svg" alt="NPTEL" />,
//     },
//     // Add other menu items here
//   ];

//   return (
//     <div className="flex relative">
//       <div
//         className={`${open ? "w-72" : "w-20"} bg-dark-purple h-screen p-5 pt-8 duration-300`}
//       >
//         <div className="flex gap-x-4 items-center">
//           {/* Logo */}
//           <img
//             src="../public/logo-white.svg"
//             className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
//             alt="Logo"
//           />
//           {/* E-Uni title */}
//           <h1
//             className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}
//           >
//             E-Uni
//           </h1>
//         </div>
//         <ul className="pt-6">
//           {/* Menu items */}
//           {Menus.map((menu, index) => (
//             <li
//               key={index}
//               className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}
//             >
//               {/* Icon */}
//               {menu.icon}
//               {/* Title */}
//               <span className={`${!open && "hidden"} origin-left duration-200`}>
//                 {menu.title}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="flex-1 p-8">
//         <div className="flex items-center mb-2">
//           {/* Chevron icon */}
//           <ChevronLeft
//             className={`transform duration-300 cursor-pointer w-6 border-dark-purple border-2 rounded-full ${open ? "mr-3" : "rotate-180 mr-3"}`}
//             onClick={() => setOpen(!open)}
//           />
//           {/* Title */}
//           <h1 className="text-2xl font-semibold">NPTEL Verification</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function NptelPage() {
  return (
    <>
      {" "}
      <Navbar />{" "}
    </>
  );
}
