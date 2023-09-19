const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/BackEndRegistrationForm").then(()=>{
    console.log("connected sucessfully");
}).catch((e)=>{
    console.log(e);
});
