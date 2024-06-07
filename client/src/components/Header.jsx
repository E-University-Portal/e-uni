import { Bell } from "lucide-react";
import NotificationPopup from "./NotificationPopup";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.scrollY;
      const newOffset = 1;
      if (currentOffset >= newOffset) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed transition-shadow duration-150 top-0 z-50 left-0 md:left-[5dvw] w-full md:w-[95dvw] px-[3dvh] md:px-[4dvw] min-h-[12.5dvh] md:min-h-[calc(2.5dvw+2.5rem)] bg-[#f0f0f0] flex items-center space-x-2 mr-0 ml-auto mb-2 justify-end ${
        isScrolled ? "drop-shadow-md" : ""
      }`}
    >
      <Popover>
        <PopoverTrigger>
          <Bell className="hover:cursor-pointer md:h-[2.5dvw] h-[12dvh]" />
        </PopoverTrigger>
        <PopoverContent>
          <NotificationPopup />
        </PopoverContent>
      </Popover>
    </header>
  );
}
