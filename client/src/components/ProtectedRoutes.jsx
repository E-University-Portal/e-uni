import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
export default function ProtectedRoutes() {
  return (
    <div className="bg-[#f0f0f0] min-h-dvh w-full">
      <Navbar />
      <div className="ml-52">
        <Header />
        <div className="mt-14 px-16">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
