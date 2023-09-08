const express=require("express")
const port=8000;
const cors=require('cors')
const specific=require("./middleware/usermiddleware")
const {home,login,signup,logout}=require("./contoller/userController")
const app=express();
 
app.use(cors());
const app_middle=(req,res,next)=>{
    // res.send("APP level middleware running")
    console.log("APP level middleware running")
    next()
}
app.use(app_middle) 
app.get("/",home)
app.get("/login",specific,login)
app.get("/signup",specific,signup) 
app.get("/logout",logout)

app.listen(port,(err)=>{
    console.log("server running on port no:",port);
})