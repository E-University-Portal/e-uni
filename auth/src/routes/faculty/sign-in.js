import { Router } from "express";
import { facultySignIn } from "../../controllers/faculty.controller.js";
import Faculty from "../../models/faculty.model.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const router = Router();

router.route("/api/users/faculty/sign-in").post(facultySignIn);
router.route("/api/users/faculty/sign-up").post(
  asyncHandler(async (req, res) => {
    const { name, email, password, rollno } = req.body;
    const user = await Faculty.create({ name, email, password, facultyId });

    return res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      rollno: user.facultyId,
      token: user.generateAccessToken(user._id),
    });
  }),
);

export default router;
