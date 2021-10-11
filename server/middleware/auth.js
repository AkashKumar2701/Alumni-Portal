import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];

        if (token) {
            const decodedData = jwt.verify(token, process.env.SECRET_KEY);
            req.userId = decodedData?.id;
        }

        next();

    } catch (error) {
        console.log(error);
    }
}