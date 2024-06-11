import { useAuth } from "@/contexts/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = () => {
  const { userRef } = useAuth();

  if (!userRef) {
    return <Navigate to="/auth/student" />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
