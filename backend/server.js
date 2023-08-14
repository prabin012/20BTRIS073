
import { app } from "./app.js";
import { connectDb } from "./connection/dbConnection.js";


//database connection 

connectDb();




 //server
app.listen(5000, ()=>{
    
    console.log("Server running at port",5000)
});
