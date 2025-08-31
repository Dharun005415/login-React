const express = require("express")

const app = express()

var email = "dharunliza05@gmail.com"
var password = 3179


app.post("/login",function(req,res) 
{
    if(req.body.email === email && req.body.password == password)
    {
        res.send("Login Success")
    }
    else{
        res.send("Login Fail")
    }
    
})





app.listen(3000,function(){
    console.log("Server Started......")
})