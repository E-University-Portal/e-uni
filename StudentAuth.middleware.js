import { ApiError } from "../utils/ApiError.js";
import {asyncHandler} from "../utils/asyncHandler.js"
import jwt from "jsonwebtoken"
import {Student} from "../models/student.model.js"
import { generateStudentAccessAndRefreshTokens } from "../utils/generateTokens.js";

export const verifyJWT = asyncHandler(async(req, _, next) => {
    try {
        const {accessToken, refreshToken} = generateStudentAccessAndRefreshTokens(student._id)
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        
        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }
    
        
        const decodedToken = jwt.verify(token, '4326b08c6e28c09d451cdacb7b1ef9302156a632aa665cc24c4769bc3019a4098c8cd0b957017175a956fb4191ed3b6ef244ba86e0ca900dca68d32a701bbd5e')
    
        const student = await Student.findById(decodedToken?._id).select("-password -refreshToken")
    
        if (!student) {
            
            throw new ApiError(401, "Invalid Access Token")
        }
    
        req.student = student; 
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
    
})