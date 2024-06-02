import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-b from-[#4356FF] to-[#283499] w-52 h-full fixed top-0 left-0 z-[1000]">
      <Link to={"/"} className="h-fit flex justify-center items-center mt-4">
        <img src="/logo.svg" className="max-h-10" />
      </Link>
    </div>
  );
}
