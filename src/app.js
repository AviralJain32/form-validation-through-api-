const express=require("express");
const { handlebars } = require("hbs");
const path=require("path");
const app= express();
const hbs=require("hbs");

require("./db/conn");
const register=require("./models/registers");
const port = process.env.PORT || 8000;

const static_path=path.join(path.join(__dirname,"../public"));
const temp_path=path.join(path.join(__dirname,"../templates/views"))
const partial_path=path.join(path.join(__dirname,"../templates/partials"))


app.use(express.static(static_path))
app.set("view engine","hbs");

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set("views",temp_path);

hbs.registerPartials(partial_path);

app.get("/",(req,res)=>{
    res.render("register");
})
//create a new user in the database
app.post("/",async(req,res)=>{
    try{
        console.log(req.body.gender);
        const Password=req.body.Password;
        const Cpassword=req.body.Cpassword;
        if(Password===Cpassword){
            const registerEmployee=new register({
                Fname:req.body.Fname,
                Lname:req.body.Lname,
                Email:req.body.Email,
                gender:req.body.gender,
                PhoneNumber:req.body.PhoneNumber,
                Age:req.body.Age,
                Password:req.body.Password,
                Cpassword:req.body.Cpassword
            })
            const registered=await registerEmployee.save();
            res.status(201).render("success");
        }
        else{
            res.send("password are not matching")
        }
    }
    catch(error){
        res.status(400).send(error);

    }
})
app.get("/login",(req,res)=>{
    res.render("login");
})

app.listen(port,()=>{
    console.log(`server is running at port number ${port}`);
})