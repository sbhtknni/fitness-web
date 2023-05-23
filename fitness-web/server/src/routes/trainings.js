import express from "express";
import mongoose from "mongoose";
import { TrainingModel } from "../models/Training.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

//Get all trainings
router.get("/", async (req, res) => {
    try {
        const trainings = await TrainingModel.find({});
        return res.status(200).json({trainings, message: "All trainings sent" });
    } catch (error) {
        res.json(error,{ message: error.message });
    }
});

//Add training to user
router.post("/", async (req, res) => {
    const { userID, trainingName } = req.body;
    try {
        const user = await UserModel.findById({userID});

        if ( !user ) {
            console.log("!!User not found");
        }
        console.log("User found");
        const trainings = await TrainingModel.findOne({name : trainingName});
        if ( !trainings ) { 
            return res.status(404).json({ message: "Training not found" });
        }
        const selectedTraining = {
            trainingId: trainings._id,
            startDate: new Date(),
          };
          user.selectedTrainings.push(selectedTraining);
          console.log("User found2");

            await user.save();
            console.log("User found3");
            return res.status(200).json({ message: "Training added to user" });

    }
    catch (error) {
        console.log("User not found");

        res.json({ message: "Cant add training to user" });
    }
});

export { router as trainingsRouter}