import LoginForm from "@/components/LoginForm";

const SignIn = () => {
  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundImage: "url('/bulb.jpg')",
        backgroundSize: "contain",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-1/2 bg-cover bg-center"></div>
      <div className="w-1/2 flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default SignIn;
