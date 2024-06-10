import LoginForm from "@/components/LoginForm";
import axios from "axios";
import LoginHeader from "@/components/LoginHeader";
import { useToast } from "@/components/ui/use-toast";
export default function FacultyLoginPage() {
  const { toast } = useToast();
  const handleSubmit = async (data) => {
    try {
      const response = await axios.post("/api/users/faculty/sign-in", data);

      console.log(response.data);
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
      <LoginForm onSubmit={handleSubmit} description="E-Uni Faculty Login" />
    </div>
  );
}
