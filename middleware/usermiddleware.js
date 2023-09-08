const specific=(req,res,next)=>{
    let id=req.query.id;
   if(id>=10){
    next()
   }
    else{
        res.send("specific middleware running");
        console.log("specific middleware running");
    }
   
}
module.exports=specific