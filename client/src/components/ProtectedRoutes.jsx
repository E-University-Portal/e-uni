import { useAuth } from "@/contexts/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import Header from "./Header";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = () => {
  const { userRef } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (!userRef) {
    return <Navigate to="/auth/student" />;
  }

  return (
    <>
      <Navbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <Header isCollapsed={isCollapsed} />
      <div
        className={`${
          isCollapsed ? "ml-[5dvw]" : "ml-[12dvw]"
        } transition-all duration-200 mt-[10dvh]`}
      >
        <Outlet />
      </div>
    </>
  );
};

export default ProtectedRoute;
