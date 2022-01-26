let jsw= require("jsonwebtoken")
let db = require("../database/models")

module.exports = async(req, res, next) => {
   try{ ///recivimos el token
    let token = req.headers["x-acess-token"]


    //verificamos que el token existe
    if(!token){
        return res.status(403).json({message:"No se a enviado token"})
    }

    ///extraemos lo que trae el token
    let decode = jsw.verify(token,"secret")

    const user= await db.Usuarios.findByPk(decode.id)
    
    if(!user){
        return res.status(404).json({message:"Usuario no encontrado"})
    }   
    
    next()
    }
    catch(error){
        return res.status(401).json({message: "No Autorizado"})
    }
}