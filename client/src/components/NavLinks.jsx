import { FileText, GraduationCap, University, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navlinks = [
  {
    to: "/profile",
    name: "Profile",
    icon: <User size={36} />,
  },
  {
    to: "/research",
    name: "Research",
    icon: <FileText size={36} />,
  },
  {
    to: "/academics",
    name: "Academics",
    icon: <GraduationCap size={36} />,
  },
  {
    to: "/admin",
    name: "Administration",
    icon: <University size={36} />,
  },
];

export default function NavLinks() {
  return (
    <div className={`w-full flex flex-col`}>
      {Navlinks.map((navlink, index) => {
        return (
          <NavLink
            key={index}
            to={navlink.to}
            className={({ isActive }) =>
              [
                isActive ? "bg-[#f0f0f0]" : "text-white",
                "flex items-center w-full text-[1.5dvw] gap-x-[1dvw] pl-6 py-4",
              ].join(" ")
            }
          >
            {navlink.icon}
            {navlink.name}
          </NavLink>
        );
      })}
    </div>
  );
}
