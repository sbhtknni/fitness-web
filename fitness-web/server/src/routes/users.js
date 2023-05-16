import  express  from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/Users.js";

const router = express.Router();   //Create Router

router.use(express.json()); // Add this line to parse request bodies as JSON

router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    console.log("here" , req.body)

    const user= await UserModel.findOne(  {email: email }    );
    res.json( user);

});   



export{ router as usersRouter}