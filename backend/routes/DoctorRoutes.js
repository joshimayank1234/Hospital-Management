import { Router } from "express";
import Doctor from "../Models/Doctor.js"

const router = Router();

router.get("/",async(req,res)=>{
try{
    const doctor = await Doctor.find();
    res.json(doctor);
}
catch(error){
    res.status(500).json({message:error.message});
}
})

router.post("/",async(res,req)=>{
    const doctorData = new Doctor(req.body)

    try{
        const newDoctor = await doctorData.save();
        res.status(201).json(newDoctor);
    }
    catch(error){
        res.status(400).json({message:error.message})
    }

})

export default router;