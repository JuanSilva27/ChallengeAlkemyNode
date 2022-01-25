var express = require('express');
var router = express.Router();
let { list, detail }=require("../controllers/moviesController")




router.get("/",list)
router.get("/detail/:id",detail)

module.exports=router