import { COOKIE_OPTIONS } from "../constants.js";
import Faculty from "../models/faculty.model.js";
import ApiError from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const signin=asyncHandler(async(req,res)=>{
    const { email, password } = req.body;
    try {
        const existingUser = await Faculty.findOne({ email });
    
        if (!existingUser) {
          throw new ApiError(400, "Invalid student credentials!");
        }
    
        const isPasswordCorrect = existingUser.matchPassword(password);
    
        if (!isPasswordCorrect) {
          throw new ApiError(400, "Invalid login credentials");
        }
      } catch (error) {
        throw new ApiError(500, "Something went wrong while signing in!", error);
      }
      return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(
          200,
          {
            user: loggedInUser,
            accessToken,
            refreshToken,
            console.error(error);
            throw new ApiError(500, "Something went wrong while signing in!", error);
          },
          "User logged In Successfully",
        ),
      );

});