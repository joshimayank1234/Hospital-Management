import mongoose from "mongoose";
import "dotenv/config"

export default function connectDB(){

    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log("Conneted to mongoDb");
    })

}

