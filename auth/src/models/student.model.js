import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
  {
    name: {
      type: string,
      required: true,
    },
    email: {
      type: string,
      required: true,
    },
    rollNo: {
      type: string,
      required: true,
    },
    password: {
      type: string,
      required: true,
    },
  },
  { timestamps: true },
);

export default Student = mongoose.model("Student", studentSchema);
