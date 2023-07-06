import mongoose from "mongoose";
//SCHEMA FOR MUSCLE INFORMATION IN THE DATABASE 
const MuscleInformationSchema = new mongoose.Schema({
    muscle: { type: String, required: true, unique: true },
    generalInformation: { type: String, required: true },
    topics: [
        {
            topic: { type: String, required: true },
            information: { type: String, required: true },
            link: { type: String }
        }
    ]
});

export const MusclesInformation = mongoose.model("muscleInformation", MuscleInformationSchema);