import mongoose, { Schema } from "mongoose";

const facultySchema = new Schema(
  {
    name: {
      type: string,
      required: true,
    },
    email: {
      type: string,
      required: true,
    },
    facultyId: {
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

export default Faculty = mongoose.model("Faculty", facultySchema);
