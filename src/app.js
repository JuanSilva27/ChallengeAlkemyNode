const express = require ("express")
const app = express()
const jwt = require("jsonwebtoken")
let login =require("./routes/user")
let movies = require("./routes/movies")
app.listen(3001,()=>{
    console.log("servidor en marcha")
})

app.use("/",login)
app.use("/movies",movies)