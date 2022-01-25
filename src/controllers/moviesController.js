const db = require('../database/models')


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
            let personajes= pelicula.personajes.map(element=>{
                let arr={
                    id: element.id,
                    nombre: element.nombre
                }
                return arr
            })

            let data= {
                id: pelicula.id,
                imagen: pelicula.imagen,
                titulo: pelicula.titulo,
                fecha: pelicula.fecha,
                calificacion:pelicula.calificacion,
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
    }
}