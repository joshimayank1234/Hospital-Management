import mongoose from "mongoose";

let DoctorSchema = new mongoose.Schema({
    name:String,
    speaciality:String,
    image:{
        type:String,
        default:"https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
    },
    location:String,
    appointment:String,
    exp:String,
    bio:String,
    education:String
})

let Doctor = mongoose.model("Doctor",DoctorSchema);

export default Doctor;