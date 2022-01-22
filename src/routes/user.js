var express = require('express');
var router = express.Router();

router.get("/",(req,res)=>{
    res.send("soy un loguin")
})

module.exports=router