const express = require ("express")
const app = express()
const jwt = require("jsonwebtoken")
let login =require("./routes/user")
let movies = require("./routes/movies")
let characters = require ("./routes/characters")



app.listen(3001,()=>{
    console.log("servidor en marcha")
})

app.use(express.json())

app.use("/auth",login)
app.use("/movies",movies)
app.use("/characters",characters)