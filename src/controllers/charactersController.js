const res = require('express/lib/response')
const db = require('../database/models')

module.exports = {
    list: async (req, res) => {
        try {
            let personajes = await db.Personajes.findAll({
                include: {all:true}
            })
            let data = personajes.map(personaje => {
                let arr = {
                    nombre: personaje.nombre,
                    imagen: personaje.imagen
                }
                return arr
            })
            let response = {
                status: 200,
                message: "ok",
                data
            }
            res.status(201).json(response)
        }
        catch (error) {
            return res.status(400).json({
                status: 400,
                message: error + "1"
            })
        }
    },

    create: async (req, res) => {
        let {imagen,nombre,edad,peso,historia}= req.body
        try {
            let data = await db.Personajes.create({
                imagen: imagen,
                nombre: nombre,
                edad: edad,
                peso: peso,
                historia: historia,
            })
            let response = {
                status: 200,
                message: "ok",
                data
            }
            res.status(201).json(response)
        }
        catch (err) {
            return res.status(400).json({
                status: 400,
                message:"el Formato de creacion de Personaje debe ser image: string, nombre:string, edad: integer, peso: integer, historia: string"
            })
        }

    },

    editById: async (req, res)=>{
        try{
            const Character= await db.Personajes.findByPk(req.params.id)
            const UpdatedCharacter= await Character.update(req.body)
            let response = {
                status: 200,
                message: "ok",
                UpdatedCharacter
            }
            res.status(201).json(response)
        }
        catch(err){
            return res.status(400).json({
                status: 400,
                message: err + "1"
            })
        }

    },

    deleteById: async (req,res)=>{
        try{
            await db.Personajes.destroy({
                where:{
                    id: req.params.id
                }
            })
            let response = {
                status: 200,
                message: "El Personaje fue eliminado"
            }
            res.status(201).json(response)
        }
        catch(err){
            return res.status(404).json({
                status: 404,
                message: err + "1"
            })
        }
    }
}