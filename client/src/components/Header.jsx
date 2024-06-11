import { Bell } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
//import { Button } from "@/components/ui/button";
import ThemeBtn from "@/components/ThemeBtn";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeProvider";
export default function Header() {
  const { toggle } = useContext(ThemeContext);

  return (
    <>
      <div className="flex flex-row items-center justify-end p-4 space-x-4 bg-accent">
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
    </>
  );
}
