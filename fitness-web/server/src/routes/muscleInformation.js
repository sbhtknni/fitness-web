import express from "express";
import { MusclesInformation } from "../models/MuscleInformation.js";

const router = express.Router();

// Get muscleInformation by muscle name
router.get("/:muscleName", async (req, res) => {
    const muscleName = req.params.muscleName;
    console.log(muscleName);
    try {
        const musclesInformation = await MusclesInformation.findOne({ muscle:muscleName});
        if (!musclesInformation) {
            return res.status(400).json({ message: "MusclesInformation does not exist" });
          }
        console.log("MusclesInformation found");
        return res.status(200).json({musclesInformation, message: "All musclesInformation sent" }); 
    } catch (error) {
        res.json(error,{ message: error.message });
    }
});

// Add musclesInformation to database
router.post("/muscleInformation", async (req, res) => {
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
        console.log("MuscleInformation saved");
    } catch (error) {
      console.error("Failed to save MuscleInformation", error);
      res.status(500).json({ error: "Failed to save MuscleInformation" });
    }
  });
  
  export { router as muscleRouter };