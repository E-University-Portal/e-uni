import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import StudentLoginPage from "./pages/StudentLoginPage.jsx";
import FacultyLoginPage from "./pages/FacultyLoginPage.jsx"
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Research from "./pages/Research.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/auth/student" element={<StudentLoginPage />} />
      <Route path="/auth/faculty" element={<FacultyLoginPage />} />
      <Route path="" element={<ProtectedRoutes />}>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/research" element={<Research />} />
      </Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
