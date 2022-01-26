var express = require('express');
var router = express.Router();
let { list, create, editById, deleteById, detail }=require("../controllers/charactersController")
let authjwt=require("../middleware/authjwt")


router.get("/",list)
router.get("/detail/:id",detail)
router.post("/create",authjwt,create)
router.put("/edit/:id",authjwt,editById)
router.delete("/delete/:id",authjwt,deleteById)


module.exports=router