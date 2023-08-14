import { User } from "../models/schema.js";
import { falsereturn, features } from "../utils/feature.js";
import bcrypt from "bcrypt";
// import {Companey} from "../models/newCompaney.js";


//Companey register api
export const CompaneyRegister = async(req, res)=>{
    const { companeyName, ownerName, ownerEmail, RollNo,accessCode } = req.body;

    const users = await User.findOne({ownerEmail});
    if(users){
        console.log("user already exist");
       return falsereturn(res,`false`,`user already exist`);
        
    }
   
    await User.create({
        companeyName, 
        ownerName,
        ownerEmail,
        RollNo,
        accessCode
        
    });
    
    features(res,`registation successfull`,201,true);
    console.log("successdful register");
    console.log(companeyName);
   
};







