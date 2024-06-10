import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export default function ThemeBtn() {
  const { toggle, toggleFunction } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleFunction();
  };

  return (
    <Button
      variant="ghost"
      className="hover:text-primary-foreground hover:bg-card-foreground text-secondary-foreground group relative"
      onClick={handleToggle}
    >
      <span className="absolute top-12 hidden group-hover:block bg-card-foreground px-2 py-1 rounded-md text-xs font-semibold">
        Toggle Theme
      </span>
      {toggle ? <Moon /> : <Sun />}
    </Button>
  );
}
