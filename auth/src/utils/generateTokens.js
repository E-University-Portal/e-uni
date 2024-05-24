import Faculty from "../models/faculty.model";
import Student from "../models/student.model";
import HttpError from "./HttpError";

export const generateStudentAccessAndRefreshTokens = async (studentId) => {
  try {
    const student = await Student.findById(studentId);

    if (!student) {
      throw new HttpError(404, "Student not found");
    }

    const accessToken = student.generateAccessToken();
    const refreshToken = student.generateRefreshToken();

    student.refreshToken = refreshToken;
    await student.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new HttpError(500, "Something went wrong while generating tokens");
  }
};

export const generateFacultyAccessAndRefreshTokens = async (facultyId) => {
  try {
    const faculty = await Faculty.findById(facultyId);

    if (!faculty) {
      throw new HttpError(404, "Faculty not found");
    }

    const accessToken = faculty.generateAccessToken();
    const refreshToken = faculty.generateRefreshToken();

    faculty.refreshToken = refreshToken;
    await faculty.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new HttpError(500, "Something went wrong while generating tokens");
  }
};
