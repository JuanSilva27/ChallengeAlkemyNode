var express = require('express');
var router = express.Router();
let { list, create, editById, deleteById, detail }=require("../controllers/charactersController")



router.get("/",list)
router.get("/detail/:id",detail)
router.post("/create",create)
router.put("/edit/:id",editById)
router.delete("/delete/:id",deleteById)


module.exports=router