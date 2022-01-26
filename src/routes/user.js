var express = require('express');
var router = express.Router();
let { register, login }=require("../controllers/userController")

router.post("/register",register)
router.post("/login",login)
module.exports=router