var express = require('express');
var router = express.Router();
let { list, detail, create, updateById, deleteById  }=require("../controllers/moviesController")




router.get("/",list)
router.get("/detail/:id",detail)
router.post("/create",create)
router.put("/edit/:id", updateById)
router.delete("/delete/:id", deleteById)

module.exports=router