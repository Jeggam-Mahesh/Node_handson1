const specific=(req,res,next)=>{
    let id=req.query.id;
   if(id>=10){
    next()
   }
    else{
        res.send("authentication failed");
        console.log("authentication failed");
    }
   
}
module.exports=specific