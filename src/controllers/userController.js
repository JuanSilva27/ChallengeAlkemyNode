const db = require('../database/models')
const bcrypt = require("bcryptjs")

module.exports = {
    register: async (req, res) => {
        let { nombre, email, contraseña } = req.body
        try {
            await db.Usuarios.create({
                nombre: nombre,
                email: email,
                contraseña: bcrypt.hashSync(contraseña, 10)
            })
            let response = {
                status: 200,
                message: "Usuario creado",
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
        try {
            let userFound = await db.Usuarios.findOne({
                where: { email: req.body.email }
            })
            if (!userFound) {
                return res.status(400).json({ message: "Usuario no encontrado" })
            }
            if (bcrypt.compareSync(req.body.contraseña, userFound.contraseña)) {
                let response = {
                    status: 200,
                    message: "Te has logueado",
                }
                res.status(200).json(response)
            } else {
                res.status(400).json({message:"contraseña invalida"})
            }

        }
        catch (err) {
            console.log(err + 1)
        }
    }
}