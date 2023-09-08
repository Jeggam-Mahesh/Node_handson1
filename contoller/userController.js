const home=(req,res)=>{
    res.send("Home Page");
}
const login=(req,res)=>{
    res.send("login Page");
}
const signup=(req,res)=>{
    res.send("sign up Page");
}
const logout=(req,res)=>{
    res.send("logpout Page");
}
module.exports={home,login,signup,logout};