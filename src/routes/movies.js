var express = require('express');
var router = express.Router();
let { list, detail, create, updateById, deleteById  }=require("../controllers/moviesController")
let authjwt=require("../middleware/authjwt")



router.get("/",list)
router.get("/detail/:id",detail)
router.post("/create",authjwt,create)
router.put("/edit/:id",authjwt, updateById)
router.delete("/delete/:id",authjwt, deleteById)

module.exports=router