import { COOKIE_OPTIONS } from "../constants.js";
import Faculty from "../models/faculty.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const facultySignIn = asyncHandler(async (req, res) => {
  const st = await Faculty.find({});
  console.log(st);
  try {
    const { email, password } = req.body;

    const existingFaculty = await Faculty.findOne({ email });

    if (!existingFaculty) {
      throw new ApiError(400, "Invalid faculty credentials!");
    }

    const isPasswordCorrect = await existingFaculty.matchPassword(password);
    console.log(isPasswordCorrect);

    if (!isPasswordCorrect) {
      throw new ApiError(
        400,
        "Invalid login credentials" + existingFaculty.password,
      );
    }

    const accessToken = existingFaculty.generateAccessToken();

    const signedInFaculty = await Faculty.findById(existingFaculty._id).select(
      "-password",
    );
    return res
      .status(200)
      .cookie("accessToken", accessToken, COOKIE_OPTIONS)
      .json(
        new ApiResponse(
          200,
          {
            user: signedInFaculty,
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
