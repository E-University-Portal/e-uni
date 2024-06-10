import {LayoutDashboard} from "lucide-react";
const Navlinks = [
    {
      to: "/",
      name: "Dashboard",
      icon: <LayoutDashboard className="w-[2.25dvw]" />,
    },
   
    {
      to: "/my-nptel",
      name: "NPTEL",
      icon: <img src="/nptel-logo.svg" className="w-[2.25dvw]" />,
    },
    // {
    //   to: "/academics",
    //   name: "Academics",
    //   icon: <GraduationCap className="w-[2.25dvw]" />,
    // },
    // {
    //   to: "/admin",
    //   name: "Administration",
    //   icon: <University className="w-[2.25dvw]" />,
    // },
  ];
  export default Navlinks;