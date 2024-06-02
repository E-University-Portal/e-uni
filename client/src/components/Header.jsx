import { BellDot, Home } from "lucide-react";
import { Link } from "react-router-dom";
import NotificationPopup from "./NotificationPopup";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { useEffect, useState } from "react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.scrollY;
      const newOffset = 1;
      if (currentOffset >= newOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed transition-all duration-150 top-0 z-50 left-52 w-[calc(100dvw-208px)] pr-12 h-14 bg-[#f0f0f0] flex items-center space-x-2 mr-0 ml-auto mb-2 justify-end ${isSticky ? "drop-shadow-md" : ""}`}
    >
      <Link to="/">
        <Home />
      </Link>
      <Popover>
        <PopoverTrigger>
          <BellDot className="hover:cursor-pointer" />
        </PopoverTrigger>
        <PopoverContent>
          <NotificationPopup />
        </PopoverContent>
      </Popover>
      <Link to="/profile" className="rounded-full">
        <img src="/my-profile.svg" className="max-h-11" />
      </Link>
    </header>
  );
}
