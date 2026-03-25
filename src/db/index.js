import mongoose from "mongoose";
import {Database_Name} from "../constants.js";


// Its a better approach to use async await and try catch block to handle the connection and errors.because the database is in another continent so sometime it can create problem

const connectDB = async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${Database_Name}`) 
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host} `)
    }
    catch(error){
        console.log("Error in DB Connection", error);
        process.exit(1);
    }
}

export default connectDB;