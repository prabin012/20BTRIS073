import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    companeyName:{
        type:String,
        required : true
    },
    ownerName:{
        type:String,
        required : true
    },
    OwnerEmail: {
       type: String,
       required :true,
       unique : true,
    },
    accessCode: {
      type :  String,
      required : true
     
    }
})
export const User =mongoose.model("User",userSchema);