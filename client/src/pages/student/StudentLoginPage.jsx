import LoginForm from "@/components/LoginForm";
import LoginHeader from "@/components/LoginHeader";
import { AuthContext } from "@/contexts/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TabsChange from "@/components/TabsChange";
export default function StudentLoginPage() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    login(data).then(navigate("/nptel"));
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-[#EE0050] to-[#00A6CB]">
      <LoginHeader />
      <TabsChange/>
      {/* <LoginForm onSubmit={handleSubmit} description="E-Uni Student Login" /> */}
    </div>
  );
}
