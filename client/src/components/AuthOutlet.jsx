import { Outlet } from "react-router-dom";
import LoginHeader from "./LoginHeader";

export default function AuthOutlet() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <LoginHeader />
      <Outlet />
    </div>
  );
}
