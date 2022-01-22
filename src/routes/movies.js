var express = require('express');
var router = express.Router();
let { list }=require("../controllers/moviesController")
router.get("/",list)

module.exports=router