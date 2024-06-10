import { useContext } from "react";
import ThemeBtn from "./ThemeBtn";
import { ThemeContext } from "@/contexts/ThemeProvider";

export default function LoginHeader() {
  const { toggle } = useContext(ThemeContext);
  return (
    <header className="w-full fixed top-0 left-0 flex items-center justify-between px-6">
      <img
        src={toggle ? "/logo-full-white.svg" : "/logo-full-black.svg"}
        className="py-2 h-12"
      />
      <ThemeBtn />
    </header>
  );
}
