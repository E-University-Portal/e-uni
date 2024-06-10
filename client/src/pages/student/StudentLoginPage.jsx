import LoginForm from "@/components/LoginForm";
import LoginHeader from "@/components/LoginHeader";
import { useToast } from "@/components/ui/use-toast";
import { AuthContext } from "@/contexts/AuthProvider";
import { useContext } from "react";
export default function StudentLoginPage() {
  const { toast } = useToast();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (data) => {
    try {
      login(data);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        description: error.message,
      });
    }
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-[#EE0050] to-[#00A6CB]">
      <LoginHeader />
      <LoginForm onSubmit={handleSubmit} description="E-Uni Student Login" />
    </div>
  );
}
