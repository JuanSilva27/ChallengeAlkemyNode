var express = require('express');
var router = express.Router();
let { list, detail, create }=require("../controllers/moviesController")




router.get("/",list)
router.get("/detail/:id",detail)
router.post("/create",create)

module.exports=router