
const db = require('../database/models')
const Op = db.Sequelize.Op;

module.exports = {
    list: async (req, res) => {
        let response = (data) => {
            let obj =
            {
                status: 200,
                message: "ok",
                data
            }
            return obj
        }
        try {
            switch (true) {
                case (req.query.name !== undefined):
                    let characterByName = await db.Personajes.findAll({
                        where: { nombre: { [Op.like]: `%${req.query.name}%` } },
                        include: { all: true }
                    })

                    res.status(201).json(response(characterByName))
                    break

                case (req.query.age !== undefined):
                    let characterByAge = await db.Personajes.findAll({
                        where: { edad: { [Op.eq]: req.query.age } },
                        include: { all: true }
                    })

                    if (characterByAge.length > 0) {
                        res.status(201).json(response(characterByAge))
                    }
                    else {
                        res.status(404).json("no se encontro ningun personaje con esa Edad")
                    }
                    break

                case (req.query.movies !== undefined):
                    let characterByMovies = await db.PeliculasSeries.findAll({
                        include: { all: true },
                        where: { id: { [Op.eq]: req.query.movies} },
                    })

                    let respuesta = characterByMovies.map(e => {
                        let personajesMap = e.personajes.map(element => {
                            let arr = {
                                id: element.id,
                                nombre: element.nombre
                            }
                            return arr
                        }
                        )
                        let arr = {
                            id: e.id,
                            titulo: e.titulo,
                            personajes: personajesMap
                        }
                        return arr
                    })
                    if (characterByMovies.length > 0) {
                        res.status(201).json(response(respuesta))
                    }
                    else {
                        res.status(404).json("Esa pelicula no existe, intente con otro id")
                    }
                    break

                case (req.query.weight !== undefined):
                    let characterByWeight = await db.Personajes.findAll({
                        include: { all: true },
                        where: { peso: { [Op.eq]: req.query.weight } },
                    })
                    if (characterByWeight.length > 0) {
                        res.status(201).json(response(characterByWeight))
                    }
                    else {
                        res.status(404).json("no se encontro personaje con ese Peso")
                    }


                    break


                default:
                    let personajes = await db.Personajes.findAll({
                        include: { all: true }
                    })
                    let data = personajes.map(personaje => {
                        let arr = {
                            nombre: personaje.nombre,
                            imagen: personaje.imagen
                        }
                        return arr
                    })
                    console.log(req.query)
                    res.status(201).json(response(data))
                    break
            }
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
            let personaje = await db.Personajes.findByPk(req.params.id, {
                include: { all: true }
            })
            let peliculas = personaje.peliculas.map(pelicula => {
                let arr = {
                    titulo: pelicula.titulo,
                    imagen: pelicula.imagen,
                    fecha: pelicula.fecha,
                    calificacion: pelicula.calificacion
                }
                return arr
            })
            let data = {

                imagen: personaje.imagen,
                nombre: personaje.nombre,
                edad: personaje.edad,
                peso: personaje.peso,
                historia: personaje.historia,
                peliculas: peliculas


            }
            let response = {
                status: 200,
                message: "ok",
                data
            }
            res.status(201).json(response)
        }
        catch (err) {
            return res.status(404).json({
                status: 404,
                message: "no se encontro la Personaje"
            })
        }
    },

    create: async (req, res) => {
        let { imagen, nombre, edad, peso, historia } = req.body
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
                message: "Personaje Creado!",
                data
            }
            res.status(201).json(response)
        }
        catch (err) {
            return res.status(400).json({
                status: 400,
                message: "el Formato de creacion de Personaje debe ser image: string, nombre:string, edad: integer, peso: integer, historia: string"
            })
        }

    },

    editById: async (req, res) => {
        try {
            const character = await db.Personajes.findByPk(req.params.id)
            if (character) {
                const UpdatedCharacter = await character.update(req.body)
                let response = {
                    status: 200,
                    message: "ok",
                    UpdatedCharacter
                }
                res.status(201).json(response)
            } else {
                return res.status(404).json({
                    status: 404,
                    message: "personaje no encontrado"
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
            
            let cosas = await db.PersonajePelicula.findAll({ ///comprueba si el personja a eliminar esta relacionado a alguna pelicula
                where: {
                    id_personaje: req.params.id
                }
            })
            if(cosas.length>0){ ///si esta relacionado a alguna pelicula elimina la relacion antes de eliminar al personaje
                await db.PersonajePelicula.destroy({
                    where: {
                        id_personaje: req.params.id
                    }
                })
            }

            await db.Personajes.destroy({
                where: {
                    id: req.params.id
                }
            })
            console.log(cosas)
            let response = {
                status: 200,
                message: "El Personaje fue eliminado"
            }
            res.status(201).json(response)
        }
        catch (err) {
            return res.status(404).json({
                status: 404,
                message: err + "1"
            })
        }
    }
}