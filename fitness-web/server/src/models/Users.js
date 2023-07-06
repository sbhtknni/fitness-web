import mongoose from "mongoose";

//SCHEMA FOR USER IN THE DATABASE
//SELECTED TRAININGS IS AN ARRAY OF OBJECTS THAT CONTAINS THE TRAINING ID, NAME, WEIGHT, BMI AND START DATE
const UserSchema = new mongoose.Schema({   
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    height: { type: Number, required: true, min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER },
    weight: { type: Number, required: true, min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER },
    bmi: { type: Number, min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER },
    selectedTrainings: [
        {
            trainingId: { type: mongoose.Schema.Types.ObjectId, ref: "trainings" },
            name: { type: String, required: true },
            weight: { type: Number, required: true, min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER },
            bmi: { type: Number, min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER },
            startDate: { type: Date, required: true },
        }
    ]
});

export const UserModel = mongoose.model("users", UserSchema);




