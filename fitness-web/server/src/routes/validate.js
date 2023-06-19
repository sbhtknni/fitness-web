
import jwt from "jsonwebtoken";
import { config } from 'dotenv';


//validate thata the user is logged in and has a valid token
// i signe the token with the user id lije this:
//        const token =jwt.sign({ id: user._id }, "secret");
config();

export const validateToken = (req, res, next) => {
    const token =req.headers.authorization;

    if (!token) {
        console.log("Access denied, no token provided");
        return res.status(401).json({ message: "Access denied, no token provided" });
    }
    try {
        //remove the "Bearer " from the token
        const tokenWithoutBearer = token.split(" ")[1];
        const enc = process.env.SECRET_KEY;
        const verified = jwt.verify(tokenWithoutBearer, enc);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token" });
    }
    }
