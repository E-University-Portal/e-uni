import { useAuth } from "@/contexts/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const auth = useAuth();

  console.log(auth.user); // null!!

  // if (!auth.user) {
  //   return <Navigate to="/auth/student" />;
  // }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
