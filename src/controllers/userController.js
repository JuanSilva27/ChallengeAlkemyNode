const db = require('../database/models')
const bcrypt = require("bcryptjs")
const jwt = require ("jsonwebtoken")





module.exports = {
    register: async (req, res) => {
        try {
            //obtenemos los datos del usuario: 
            let { nombre, email, contraseña } = req.body

            //verificamos que el usuario no exista
            let user= await db.Usuarios.findOne({
                where:{
                    email: email
                }
            })

            if(user!== null){
                return res.status(400).json({
                    status:400,
                    message:"Ya hay un usuario registrado con este mail"
                    
                })
            }

            //creamos un nuevo usuario
            const newUser=await db.Usuarios.create({
                nombre: nombre,
                email: email,
                contraseña: bcrypt.hashSync(contraseña, 10)
            })

            //generamos el toke
            let token= jwt.sign({id:newUser.id},"secret")



            let response = {
                status: 200,
                message: `Usuario creado`,
                token:token
            }
            res.status(201).json(response)
        }
        catch (err) {
            return res.status(400).json({
                status: 400,
                message: err + "1"
            })
        }
    },

    login: async (req, res) => {
        try{
            //buscamos un usuario que coincida con el mail ingresado
            let userFound = await db.Usuarios.findOne({
                where: { email: req.body.email }
            })

            if (!userFound) {
                return res.status(401).json({ message: "Usuario no encontrado" })
            }

            //verificamos que las contraseñas coincidan
            const matchPassword= bcrypt.compareSync(req.body.contraseña, userFound.contraseña)
            if (!matchPassword) {
                return res.status(401).json({message:"contraseña invalida"})
            } 

            const token = jwt.sign({id:userFound.id},"secret")

            let response = {
                status: 200,
                message: "Te has logueado",
                token:token
            }
            res.status(200).json(response)
        }
        catch(err){
            return res.status(400).json({
                status: 400,
                message: err + "1"
            })
        }

        
    }
}