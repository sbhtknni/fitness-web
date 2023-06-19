import mongoose from "mongoose";

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