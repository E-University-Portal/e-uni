import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
export default function ProtectedRoutes() {
  return (
    <div className="bg-[#f0f0f0] min-h-dvh w-full">
      <Navbar />
      <div className="md:ml-[5dvw]">
        <Header />
        <div className="px-[2dvw] md:px-[5dvw] mt-[12.5dvh] md:mt-[calc(2.5dvw+2.5rem)]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
