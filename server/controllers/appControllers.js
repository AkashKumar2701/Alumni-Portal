import Faculty from "../schema/facultySchema.js";
import Alumni from "../schema/alumniSchema.js";

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

export const homepage = async (req, res) => {
    try {
        const faculty = await Faculty.find();
        const alumni = await Alumni.find();
        res.status(200).json({ faculty, alumni });
    } catch (error) {
        res.status(400).json(error);

    }
}

export const facultySignup = async (req, res) => {
    const { email, password, firstName, lastName, secretKey, confirmPassword } = req.body;
    const existingUser = await Faculty.findOne({ email });


    if (existingUser) {
        return res.status(400).json({ message: 'User Already Exists !' });
    }
    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords Not Matched !' });
    }

    const securedPassword = await bcrypt.hash(password, 14);
    const result = await Faculty.create({ email, password: securedPassword, userName: `${firstName} ${lastName}` });
    console.log("Backend ", result);

    const token = jwt.sign({ email: result, id: result._id }, process.env.SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({ result, token });
}

export const facultyLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await Faculty.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "User Doesn't Exists !" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid Credentials ' });
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ result: existingUser, token });

    } catch (error) {
        res.status(500).json({ message: 'Something Went Wrong !' });

    }
}
