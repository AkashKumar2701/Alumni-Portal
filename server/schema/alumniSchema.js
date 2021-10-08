import mongoose from 'mongoose';

const alumniSchema = {
    firstName: { type: String },
    lastName: { type: String },
    userName: { type: String },
    email: { type: String },
    mobile: { type: Number },
    id: { type: String },
    specialID: { type: String }

}

const AlumniSchema = mongoose.model('Alumni', alumniSchema);
export default AlumniSchema;