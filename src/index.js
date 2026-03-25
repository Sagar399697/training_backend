// require('dotenv').config({path: './.env'}) This is old way to import dotenv package
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import {app} from "./app.js";

dotenv.config({
    path: './.env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`App is listening on port ${process.env.PORT || 8000}`);
    })
})
.catch((error)=>{
    console.log("Mongo DB Connection failed !!! ", error);
})











/*

import mongoose from "mongoose";
import { Database_Name } from "./constants";

# This is our First approach to connect to MongoDB using Mongoose and start the server.

const app = express();
( async ()=> {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${Database_Name}`)
        app.on('Error',(error)=>{
            console.log("Error in DB Connection or app is not getting connected to the database", error);
            throw error;
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }
    catch(error){
        console.log("Error in DB Connection", error);
        throw error;
    }
})()

*/