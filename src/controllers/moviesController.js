const db = require('../database/models')
const { create } = require('./charactersController')


module.exports = {
    list: async (req, res) => {

        try {
            let peliculas = await db.PeliculasSeries.findAll({
                include: [
                    { all: true }
                ]
            })

            let data = peliculas.map(pelicula => {
                let arr = {
                    imagen: pelicula.imagen,
                    titulo: pelicula.titulo,
                    fecha: pelicula.fecha,
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

    detail: async (req, res) => {
        try {
            let pelicula = await db.PeliculasSeries.findByPk(req.params.id, {
                include: [{ all: true }]
            })
            let personajes = pelicula.personajes.map(element => {
                let arr = {
                    id: element.id,
                    nombre: element.nombre
                }
                return arr
            })

            let data = {
                id: pelicula.id,
                imagen: pelicula.imagen,
                titulo: pelicula.titulo,
                fecha: pelicula.fecha,
                calificacion: pelicula.calificacion,
                genero: pelicula.genero.nombre,
                personajes: personajes
            }
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
                message: err + "1"
            })
        }
    },

    create: async (req, res) => {

        try {
            let { imagen, titulo, fecha, calificacion, id_genero } = req.body
            if (id_genero < 6 && id_genero > 0) {
                let data = await db.PeliculasSeries.create({
                    imagen: imagen,
                    titulo: titulo,
                    fecha: fecha,
                    calificacion: calificacion,
                    id_genero: id_genero
                })
                let response = {
                    status: 200,
                    message: "Personaje Creado!",
                    data
                }
                res.status(201).json(response)
            } else {
                res.status(400).json("el id_genero no corresponde a un genero existente en la DB")
            }
        }
        catch (err) {
            res.status(400).json({
                status: 400,
                message: "el Formato de creacion de Personaje debe ser image: string, titulo:string, fecha: integer, calificacion: integer, id_genero: string (del 1 al 5)"
            })
        }
    },

    updateById: async (req, res) => {
        try {
            const pelicula = await db.PeliculasSeries.findByPk(req.params.id)
            if (pelicula) {
                const UpdatedMovie = await pelicula.update(req.body)
                let response = {
                    status: 200,
                    message: "Pelicula editada",
                    UpdatedMovie
                }
                res.status(201).json(response)
            } else {
                return res.status(404).json({
                    status: 404,
                    message: "pelicula no encontrada"
                })
            }
        }
        catch (err) {
            return res.status(400).json({
                status: 400,
                message: err + "1"
            })
        }
    },

    deleteById: async (req, res) => {
        try {
            await db.PeliculasSeries.destroy({
                where: {
                    id: req.params.id
                }
            })

            let cosas = await db.PersonajePelicula.findAll({ ///comprueba si la pelicula a eliminar esta relacionado a algun personaje
                where: {
                    id_pelicula: req.params.id
                }
            })
            if (cosas.length > 0) { ///si esta relacionado a algun personaje elimina la relacion
                db.PersonajePelicula.destroy({
                    where: {
                        id_pelicula: req.params.id
                    }
                })
            }
            let response = {
                status: 200,
                message: "La Pelicula fue eliminada"
            }
            res.status(201).json(response)
        }
        catch (err) {
            return res.status(404).json({
                status: 404,
                message: "no se encontro el Personaje para eliminar"
            })
        }
    }
}
