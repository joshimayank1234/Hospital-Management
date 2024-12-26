import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import "dotenv/config"
import connectDB from "./config/db.js"
import DoctorRoutes from "./routes/DoctorRoutes.js"



const app = express();
app.use(cors())
app.use(bodyParser.json())

//-----Routes------
app.use("/api/doctor",DoctorRoutes);


//----Dbconnect-------
connectDB();

const PORT = process.env.PORT || 5600

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})