import { Router } from "express";
import { studentSignIn } from "../../controllers/student.controller.js";
import Student from "../../models/student.model.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const router = Router();

router.route("/api/users/student/sign-in").post(studentSignIn);
router.route("/api/users/student/sign-up").post(
  asyncHandler(async (req, res) => {
    const { name, email, password, rollno } = req.body;
    const user = await Student.create({ name, email, password, rollno });

    return res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      rollno: user.rollno,
      token: user.generateAccessToken(user._id),
    });
  }),
);

export default router;
