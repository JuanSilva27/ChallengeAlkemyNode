const db = require('../database/models')


module.exports = {
    list: async (req, res) => {
         
            try {
                let data = await db.PeliculasSeries.findAll({
                    include:[
                        {all: true}
                    ]
                })
                let response={
                    status:200,
                    message:"ok",
                    data
                }
                res.status(201).json(response)
            }
            catch (error) {
                return res.status(400).json({
                    status : 400,
                    message : error+"1"
                })
            }
        
    }
}