import { ApiError } from "../utils/ApiError.js";
import {asyncHandler} from "../utils/asyncHandler.js"
import jwt from "jsonwebtoken"
import { generateFacultyAccessAndRefreshTokens } from "../utils/generateTokens.js";
import {Faculty} from "../models/faculty.model.js"

export const verifyJWT = asyncHandler(async(req, _, next) => {
    try {
        const {accessToken, refreshToken} = generateFacultyAccessAndRefreshTokens(faculty._id)
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        
        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }
    
        
        const decodedToken = jwt.verify(token, 'c433b3a0a14642dde7d5b5c77b19814eddd3978d246ba01e279236bca59b8107990212ec90c8dfc38421e862a5d7aabe952795843eb61194b7de64cc730b98e4')
    
        const faculty = await Faculty.findById(decodedToken?._id).select("-password -refreshToken")
    
        if (!faculty) {
            
            throw new ApiError(401, "Invalid Access Token")
        }
    
        req.faculty = faculty; 
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
    
})