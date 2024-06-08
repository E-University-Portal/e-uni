import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#73A8FF] w-[5dvw] h-full fixed top-0 left-0 hidden md:flex md:flex-col items-center justify-between">
        <div className="w-full">
          <Link
            to="/"
            className="h-fit flex justify-center items-center mt-4 mb-6"
          >
            <img src="/logo.svg" className="h-[2.5dvw]" />
          </Link>
          <NavLinks />
        </div>
        <div
          to="/"
          className="h-fit flex justify-center rounded-full items-center my-4"
        >
          <Link to="/profile">
            <img src="/profile.svg" className="w-[2.5dvw]" />
          </Link>
        </div>
      </div>
      <div className="w-full flex md:hidden h-[7.5dvh] bg-[#73A8FF] fixed bottom-0 left-0">
        Wink
      </div>
    </>
  );
}
