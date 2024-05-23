import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
export default function ProtectedRoutes() {
  return (
    <div className="h-full w-full">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
