const mongoose = require("mongoose");
const StudentSchema= new mongoose.Schema({
    Fname:{
        type:String,
        required:true
    },
    Lname:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true 
    },
    gender:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true,
        unique:true
    },
    Age:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    },
    Cpassword:{
        type:String,
        required:true
    }
})

//now we need to create a collection

const Register=new mongoose.model("Register",StudentSchema);
module.exports=Register;