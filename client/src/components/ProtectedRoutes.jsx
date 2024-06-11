import { useAuth } from "@/contexts/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = () => {
  const auth = useAuth();

  console.log(auth.user); // null!!

  // if (!auth.user) {
  //   return <Navigate to="/auth/student" />;
  // }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
