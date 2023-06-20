import express from "express";
import { MusclesInformation } from "../models/MuscleInformation.js";
import { validateToken } from "./validate.js";

const router = express.Router();

// Get muscleInformation by muscle name
router.get("/:muscleName", validateToken, async (req, res) => {
  const muscleName = req.params.muscleName;
  try {
    const musclesInformation = await MusclesInformation.findOne({
      muscle: muscleName,
    });
    if (!musclesInformation) {
      return res
        .status(400)
        .json({ message: "MusclesInformation does not exist" });
    }
    console.log("MusclesInformation Sent");
    return res
      .status(200)
      .json({ musclesInformation, message: "All musclesInformation sent" });
  } catch (error) {
    console.log("MusclesInformation Failed to send");
    res.json(error, { message: error.message });
  }
});

// Add musclesInformation to database
router.post("/muscleInformation", validateToken, async (req, res) => {
  try {
    const { muscle, generalInformation, topics } = req.body;

    // Create a new MuscleInformation document
    const muscleInformation = new MusclesInformation({
      muscle,
      generalInformation,
      topics,
    });

    // Save the MuscleInformation document to the database
    const savedMuscleInformation = await muscleInformation.save();

    res.status(201).json(savedMuscleInformation);
    console.log("Muscle Information Saved");
  } catch (error) {
    console.error("Failed to save MuscleInformation", error);
    res.status(500).json({ error: "Failed to save MuscleInformation" });
  }
});

// Get only name from all Training Programas that in the scema
router.get("/", validateToken, async (req, res) => {
  try {
    const musclesInformation = await MusclesInformation.find({}, { muscle: 1 });
    if (!musclesInformation) {
      return res
        .status(400)
        .json({ message: "MusclesInformation Names does not exist" });
    }
    console.log("Muscles Information Names Sent");
    return res.status(200).json(musclesInformation);
  } catch (error) {
    res.json(error, { message: error.message });
  }
});

export { router as muscleRouter };
