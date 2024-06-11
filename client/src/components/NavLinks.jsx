// import { NavLink } from "react-router-dom";
// import { LayoutDashboard, FileText } from "lucide-react";

// const NavLinks = ({ handleToggle }) => {
//   const Navlinks = [
//     {
//       to: "/",
//       name: "Dashboard",
//       icon: <LayoutDashboard className="w-[2.25dvw]" />,
//     },
//     {
//       to: "/research",
//       name: "Research",
//       icon: <FileText className="w-[2.25dvw]" />,
//     },
//     {
//       to: "/my-nptel",
//       name: "NPTEL",
//       icon: <img src="/nptel-logo.svg" className="w-[2.25dvw]" />,
//     },
//   ];

//   return (
//     <div className="w-full hidden md:flex flex-col">
//       {Navlinks.map((navlink, index) => (
//         <NavLink
//           key={index}
//           to={navlink.to}
//           className={({ isActive }) =>
//             `${
//               isActive ? "bg-[#f0f0f0]" : "text-white"
//             } flex items-center hover:text-[#f13024] w-full text-[1.5dvw] gap-x-[1dvw] justify-center py-[1dvw] relative group transition-all duration-150`
//           }
//           onClick={handleToggle}
//         >
//           <div className="absolute pl-[calc(5dvw+16px)] left-0 hidden md:group-hover:flex">
//             <div className="bg-black relative flex text-white items-center p-[6px] rounded-[3px]">
//               <div className="text-[12px] leading-none font-semibold capitalize">
//                 {navlink.name}
//               </div>
//               <div className="border-solid border-r-black border-r-8 border-y-transparent border-y-[6px] border-l-0 absolute -left-2"></div>
//             </div>
//           </div>
//           {navlink.icon}
//         </NavLink>
//       ))}
//     </div>
//   );
// };

// export default NavLinks;
