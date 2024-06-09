import LoginForm from "@/components/LoginForm";

export default function StudentLoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-[#EE0050] to-[#00A6CB]">
      <LoginForm
        handleSubmit={handleSubmit}
        description={"E-Uni Student Login"}
      />
    </div>
  );
}
