import { Bell } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ThemeBtn from "@/components/ThemeBtn";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeProvider";

// eslint-disable-next-line react/prop-types
export default function Header({ isCollapsed }) {
  const { toggle } = useContext(ThemeContext);

  return (
    <div
      className={`${
        isCollapsed ? "left-[5dvw] w-[95dvw]" : "left-[12dvw] w-[88dvw]"
      } pb-1 pt-1 flex flex-row items-center justify-end px-4 space-x-4 bg-accent fixed top-0 border-b border-secondary-foreground/20 transition-all duration-150 h-[10vh]`}
    >
      <Popover>
        <PopoverTrigger>
          <Bell className="text-accent-foreground" />
        </PopoverTrigger>
        <PopoverContent>Notifications:</PopoverContent>
      </Popover>
      <ThemeBtn />
      <Link to="/profile" className="flex justify-center items-center h-fit">
        <img
          src={!toggle ? "/profile.svg" : "/profile-black.svg"}
          className="w-[3dvw] h-[3dvw] mb-1 ml-8 mr-8 transition-transform duration-200"
        />
      </Link>
    </div>
  );
}
