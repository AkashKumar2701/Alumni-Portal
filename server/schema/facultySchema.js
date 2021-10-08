import mongoose from 'mongoose';

const facultySchema = {
    firstName: { type: String },
    lastName: { type: String },
    userName: { type: String },
    email: { type: String },
    mobile: { type: Number },
    id: { type: String },
    specialID: { type: String }

}

const FacultySchema = mongoose.model('Faculty', facultySchema);
export default FacultySchema;