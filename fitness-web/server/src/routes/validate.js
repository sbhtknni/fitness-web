
import jwt from "jsonwebtoken";

//validate thata the user is logged in and has a valid token
// i signe the token with the user id lije this:
//        const token =jwt.sign({ id: user._id }, "secret");

export const validateToken = (req, res, next) => {
    console.log("==",req.headers)
    const token =req.headers.authorization;
    console.log("Validate token",token);

    if (!token) {
        // Unauthorized
        console.log("Access denied, no token provided");
        return res.status(401).json({ message: "Access denied, no token provided" });
    }
    try {
        const verified = jwt.verify(token, "secret");
        console.log("verified",verified);
        req.user = verified;
        console.log("User is logged in");

        next();
    } catch (error) {
        console.log("! User is logged in");

        res.status(400).json({ message: "Invalid token" });
    }
    }
