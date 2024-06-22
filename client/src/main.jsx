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
import StudentLoginPage from "@/pages/student/StudentLoginPage.jsx";
import FacultyLoginPage from "@/pages/faculty/FacultyLoginPage.jsx";
import { ThemeProvider } from "@/contexts/ThemeProvider.jsx";
import AuthOutlet from "@/components/AuthOutlet.jsx";
import StudentNptelPage from "@/pages/student/NptelPage.jsx";
import { AuthProvider } from "./contexts/AuthProvider.jsx";
import ProtectedRoute from "./components/ProtectedRoutes.jsx";
import StudentDashboard from "./pages/student/StudentDashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="*" element={<div>404 not found!</div>} />
      <Route element={<AuthOutlet />}>
        <Route path="/auth/student" element={<StudentLoginPage />} />
        <Route path="/auth/faculty" element={<FacultyLoginPage />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/nptel" element={<StudentNptelPage />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
