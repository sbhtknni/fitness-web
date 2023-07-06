import jwt from "jsonwebtoken";
import { config } from "dotenv";

//Config env variables
config();
//Validatetoken -> validate that the user is logged in and has a valid token
export const validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    console.log("Access denied, no token provided");
    return res
      .status(401)
      .json({ message: "Access denied, no token provided" });
  }
  try {
    //remove the "Bearer " from the token
    const tokenWithoutBearer = token.split(" ")[1];
    const enc = process.env.SECRET_KEY;
    if (tokenWithoutBearer === "null") {
      console.log("Access denied, no token provided");
      return res
        .status(401)
        .json({ message: "Access denied, no token provided" });
    }
    //verify that the token is valid
    const verified = jwt.verify(tokenWithoutBearer, enc); 
    req.user = verified;
    //add token to request
    req.token = tokenWithoutBearer;
    next();
  } catch (error) {
    console.log("Invalid token provided ");
    res.status(400).json({ message: "Invalid token" });
  }
};
