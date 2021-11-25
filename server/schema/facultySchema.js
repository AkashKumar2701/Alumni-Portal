import mongoose from "mongoose";

const facultySchema = {
  userName: { type: String },
  email: { type: String },
  mobile: { type: Number },
  password: { type: String },
  dateOfBirth: { type: Date },
  gender: { type: String },
  fatherName: { type: String },
  address: { type: String },
  phone1: { type: Number },
  phone2: { type: Number },
  experience: { type: Number },
  image: { type: String },
  id: { type: String },
};

const FacultySchema = mongoose.model("Faculty", facultySchema);
export default FacultySchema;
