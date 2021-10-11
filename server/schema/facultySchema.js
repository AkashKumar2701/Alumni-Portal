import mongoose from 'mongoose';

const facultySchema = {
    userName: { type: String },
    email: { type: String },
    mobile: { type: Number },
    password: { type: String },
    id: { type: String },
    specialID: { type: String }

}

const FacultySchema = mongoose.model('Faculty', facultySchema);
export default FacultySchema;