import express from "express";
import mongoose from "mongoose";
import { TrainingModel } from "../models/Training.js";
import { UserModel } from "../models/Users.js";
import { BMICalculation } from "..//routes/users.js";
import { validateToken } from "./validate.js";

const router = express.Router();

//Get all trainings
router.get("/", validateToken, async (req, res) => {
  try {
    console.log("UserDetails", req.user.id);

    const trainings = await TrainingModel.find({});
    return res.status(200).json({ trainings, message: "All trainings sent" });
  } catch (error) {
    res.json(error, { message: error.message });
  }
});

//Add training to user
router.post("/", validateToken, async (req, res) => {
  const { trainingName, new_weight } = req.body;
  console.log(
    "userID",
    req.user.id,
    "weight",
    new_weight,
    "trainingName",
    trainingName
  );
  try {
    const user = await UserModel.findById(req.user.id);

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User found");
    const training = await TrainingModel.findOne({ name: trainingName });

    if (!training) {
      console.log("Training not found");
      return res.status(404).json({ message: "Training not found" });
    }

    const selectedTraining = {
      trainingId: training._id,
      name: training.name,
      weight: parseInt(new_weight, 10),
      bmi: BMICalculation(parseInt(new_weight, 10), user.height),
      startDate: new Date(),
    };

    console.log("selectedTraining", selectedTraining);
    user.selectedTrainings.push(selectedTraining);
    user.weight = parseInt(new_weight, 10);
    user.bmi = BMICalculation(user.weight, user.height);
    console.log("User updated:", user);

    await user.save();
    console.log("User saved");

    return res.status(200).json({ message: "Training added to user" });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Cannot add training to user" });
  }
});

export { router as trainingsRouter };
