const express=require('express')
const data=require('./jsondata')

// const fs=require('fs');
const cors=require('cors')
const app=express();

app.use(cors({
    //'http://localhost:3001'
    origin:'*'
}))
app.get("/",(req,res)=>{
   
    res.send(`<html>
    <body>
    <h1>what is express ?</h1>
    <b><pre>
    Express is a framework built on top of Node.
    Advantages of using Express
    1. With a myriad of HTTP utility methods and middleware , creating a
       robust API is quick and easy .
    2. Express provides a thin layer of fundamental web application features,
       without obscuring Node.js features that you know .
    3. Many popular frameworks are based on Express .
    4. Express helps you manage everything, from routes to handling requests
    5. Open Source Community : It has an open-source community,so the
       code is always reviewed and improved .
    6. Express Framework is reliable and has a huge community around .
    </pre></b>
    </body>
    </html>`)
    
}) 
app.get("/api/main",(req,res)=>{
    res.send(data)
})
app.get("/about",(req,res)=>{
    res.send("about page")
})


app.listen(5000,()=>{
    console.log("server is running on port :5000")
})