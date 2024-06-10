import { Router } from "express";
import { currentStudentUser } from "../../controllers/student.controller.js";
import { verifyStudentJWT } from "../../middleware/student-auth.middleware.js";

const router = Router();

router.route("/api/users/student/me").get(verifyStudentJWT, currentStudentUser);

export default router;
