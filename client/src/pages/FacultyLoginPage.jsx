import LoginForm from "@/components/LoginForm";

export default function FacultyLogin() {
  return (
    <div className="w-full min-h-screen grid grid-cols-2">
      <div className="w-[50vw] h-full flex items-center justify-center">
        <img
          src="/faculty-SignIn.svg"
          alt="Tree"
          className="h-screen shadow-xl shadow-white object-contain w-full"
        />
      </div>
      <div className="w-[50vw] h-full flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
