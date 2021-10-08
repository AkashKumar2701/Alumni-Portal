import facultySchema from "../schema/facultySchema.js";
import alumniSchema from "../schema/alumniSchema.js";

export const homepage = async (req, res) => {
    try {
        const faculty = await facultySchema.find();
        const alumni = await alumniSchema.find();
        res.status(200).json({ faculty, alumni });
    } catch (error) {
        res.status(400).json(error);

    }
}

export const signup = (req, res) => {
    res.send('sIGNING yOU IN');
}

export const login = (req, res) => {
    res.send('Logging You In');
}
