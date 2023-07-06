import mongoose from "mongoose";
//SCHEMA FOR TRAINING IN THE DATABASE
const TrainingSchema = new mongoose.Schema({   
    name: {type : String, required : true , unique : true},
    exercises : [{type : String, required : true}],
    instructions : {type : String, required : true},
    videoUrls : [{type : String, required : true}],
    });

//setting the scheme called users in database
export const TrainingModel = mongoose.model("trainings", TrainingSchema);
