const express=require('express');
const app=express();
app.get("/",(req,res)=>{
    res.send("Hello World");
});
console.log("Server Running in 3000");
app.listen(3000);