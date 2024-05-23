import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="h-full w-full">
      <Outlet />
    </div>
  );
}
