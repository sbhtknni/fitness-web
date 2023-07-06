import express from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/Users.js";
import bcrypt from "bcryptjs";
import { config } from "dotenv";
import { validateToken } from "./validate.js";
const router = express.Router(); //Create Router
//Get env variables
config();
const usersLogedIn = {};

//Register
router.post("/register", async (req, res) => {
  try {
    const { email, password, firstName, lastName, height, weight } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ messege: "The email already exists" });
    }
    const saltRounds = 10; // Number of salt rounds
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const bmi = BMICalculation(weight, height);
    const newUser = new UserModel({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      height,
      weight,
      bmi,
    });
    await newUser.save();
    console.log("User saved successfully");
    res.status(200).json({ messege: "User registerd successfully" });
  } catch (error) {
    res.status(500).json({ messege: "Server Error" });

    console.error("Error saving user:", error);
  }
});

//Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }
    const enc = process.env.SECRET_KEY;

    if (usersLogedIn[user._id]) {
      console.log("Email " ,email ,  " already logged in");
      return res.status(400).json({ message: "User already logged in" });
    }
    // The token contains information about the user's identity. expors in 20 minutes
    const token = jwt.sign({ id: user._id }, enc, { expiresIn: "1200s" });


    //add users to the list of logged in users with their token and time  of login
    usersLogedIn[user._id] = { token, loginTime: Date.now() };
    //call removeUserFromList after `1200 seconds 
    setTimeout(removeSpecificUserFromList, 1200000, user._id);
    console.log("Email " ,email ,  " logged in successfully");
    res
      .status(200)
      .json({ token, userID: user._id, message: "logged in successfully" });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Server Error" });
  }
});
//logout and remove user from the list of logged in users
router.post("/logout", validateToken, async (req, res) => {
  try {
    //get the token from the request
    const token = req.token;
    const userID = req.user.id;
    removeSpecificUserFromList(userID);
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.error("Error logging out user:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

//remove user from the list of logged in users if the user is logged in for more  than 20 minutes
function removeSpecificUserFromList(userID) {
  if ( !usersLogedIn[userID] ) {
    return;
  }
  console.log("Token " , usersLogedIn[userID].token , "-> Logged out")
  //remove user from the list of logged in users if the user is logged in for more than 20 minutes
  delete usersLogedIn[userID];

}


//get user by id
router.get("/", validateToken, async (req, res) => {
  //print to the console the user id for app / 
  const userID = req.user.id;
  try {
    const user = await UserModel.findById(userID);
    if (!user) {
      console.log("User ", id, " does not exist");
      return res.status(400).json({ message: "User does not exist" });
    }
    user.password = "";
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error getting user : ", error);
    res.status(500).json({ message: "Server Error" });
  }
});
//update user
router.put("/update/:id", async (req, res) => {
  const userID = req.params.id;
  const { email, password, firstName, lastName, height, weight } = req.body;
  try {
    const user = await UserModel.findById(userID);
    if (!user) {
      console.log("User ", userID, " does not exist");
      return res.status(400).json({ message: "User does not exist" });
    }
    const saltRounds = 10; // Number of salt rounds
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const bmi = BMICalculation(weight, height);
    const newUser = new UserModel({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      height,
      weight,
      bmi,
    });
    await newUser.save();
    console.log("User ", userID, " saved successfully");
    res.status(200).json({ messege: "User updated successfully" });
  } catch (error) {
    console.log("Cant update user ", userID, " Error", error);
    res.status(500).json({ message: "Server Error" });
  }
});
//update user height
router.put("/updateHeight", validateToken, async (req, res) => {
  const userID = req.user.id;
  const { height } = req.body;
  console.log("height", height);
  try {
    //Serch user by userID in mongoDB get his weight and update height and bmi
    const response = await UserModel.findById(userID, "weight");
    //Update user height and bmi in mongoDB according to his weight and new height
    const user = await UserModel.findByIdAndUpdate(
      userID,
      {
        height: height,
        bmi: BMICalculation(response.weight, height),
      },
      { new: true }
    );
    if (!user) {
      console.log("User ", userID, " does not exist");
      return res.status(400).json({ message: "User does not exist" });
    }
    console.log("User ", userID, " height updated successfully");
    res.status(200).json({ messege: "User height updated successfully" });
  } catch (error) {
    console.log("Cant update height For user Error", error);
    res.status(500).json({ message: "Server Error" });
  }
});

export function BMICalculation(weight, height) {
  // Convert height to meters
  const heightInMeters = height / 100;

  // Calculate BMI
  const bmi = weight / (heightInMeters * heightInMeters);

  // Return BMI rounded to two decimal places
  return bmi.toFixed(2);
}

export { router as usersRouter };
