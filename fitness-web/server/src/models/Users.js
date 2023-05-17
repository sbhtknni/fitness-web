import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({   
    email: {type : String, required : true, unique : true},
    password:{type: String,required: true},
    // firstName: {type : String, required : true},
    // lastName: {type : String, required : true},
    // bmi: {type : Number, required : true},
    // height: {type : Number, required : true},
    // weight: {type : Number, required : true},
});

//setting the scheme called users in database
export const UserModel = mongoose.model("users", UserSchema);
