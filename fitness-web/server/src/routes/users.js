import  express  from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/Users.js";

const router = express.Router();   //Create Router


router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    console.log("here" , req.body.email, req.body.password);


    const user= await UserModel.findOne(  {email: email }    );
    res.json( user);

});   



export{ router as usersRouter}