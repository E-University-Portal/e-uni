import { Router } from "express";
import { studentSignIn } from "../controllers/student.controller.js";

const router = Router();

router.route("/api/users/signin-student").post(studentSignIn);

export default router;
