const express = require ("express")
const app = express()
const jwt = require("jsonwebtoken")

app.listen(3001,()=>{
    console.log("servidor en marcha")
})

app.get("/",(req, res)=>{
    res.json({
        mensaje: "aloha"
    })
})

app.post("/auth/register",(req,res)=>{
    const user = {
        id: 1,
        name: "Juan",
        email: "juan.silva.0270@gmail.com",
    }
    let token = jwt.sign({user:user},"secret")
    
})