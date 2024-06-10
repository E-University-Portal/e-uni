import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeProvider";
import { Toaster } from "./components/ui/toaster";
// import { useCookies } from "react-cookie";

export default function App() {
  const { toggle } = useContext(ThemeContext);

  return (
    <div className={`h-full w-full ${toggle ? "dark" : ""}`}>
      {/* <h1>Access Token: {cookies.accessToken}</h1> */}
      <Outlet />
      <Toaster />
    </div>
  );
}
