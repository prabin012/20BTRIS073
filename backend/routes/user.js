import  express  from "express";
import { User } from "../models/schema.js";
import {CompaneyRegister} from "../controllers/user.js";


const router =express.Router();


// send data to backend  api
// router.post('/add', userAdd);

// get data from post man or form from frontend api

router.post('/CompaneyRegiste',CompaneyRegister );

// login route api

// router.post('/login',login );


// get data from post man or form from frontend api

// router.post('/data',addUser );

// search data fro backed api 

// router.get('/getusers',searchUser);

export default router;