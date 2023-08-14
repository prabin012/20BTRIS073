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
    ownerEmail: {
       type: String,
       required :true,
       unique : true,
    },
    RollNo: {
       type: String,
       required :true,
       
    },
    accessCode: {
      type :  String,
      required : true
     
    }
})
export const User =mongoose.model("User",userSchema);