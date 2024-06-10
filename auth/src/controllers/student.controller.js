import { COOKIE_OPTIONS } from "../constants.js";
import Student from "../models/student.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const studentSignIn = asyncHandler(async (req, res) => {
  const st = await Student.find({});
  console.log(st);
  try {
    const { email, password } = req.body;

    const existingStudent = await Student.findOne({ email });

    if (!existingStudent) {
      throw new ApiError(400, "Invalid student credentials!");
    }

    const isPasswordCorrect = await existingStudent.matchPassword(password);
    console.log(isPasswordCorrect);

    if (!isPasswordCorrect) {
      throw new ApiError(
        400,
        "Invalid login credentials" + existingStudent.password,
      );
    }

    const accessToken = existingStudent.generateAccessToken();

    const signedInStudent = await Student.findById(existingStudent._id).select(
      "-password",
    );
    return res
      .status(200)
      .cookie("accessToken", accessToken, COOKIE_OPTIONS)
      .json(
        new ApiResponse(
          200,
          {
            user: signedInStudent,
            accessToken,
          },
          "User logged In Successfully",
        ),
      );
  } catch (error) {
    console.error(error);
    throw new ApiError(error.statusCode, error.message);
  }
});

export const currentStudentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, req.student, "Student fetched successfully"));
});
