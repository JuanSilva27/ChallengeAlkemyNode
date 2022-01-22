'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PeliculasSeries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Generos,PeliculasSeries}) {
      this.belongsTo(Generos,{
        as:"genero",
        foreignKey:"id_genero"
      }),
      this.belongsToMany(PeliculasSeries,{
        as:"personaje",
        through:"PersonajePelicula",
        foreignKey:"id_pelicula",
        otherKey:"id_personaje"
      })

    }
  }
  PeliculasSeries.init({
    imagen: DataTypes.STRING,
    titulo: DataTypes.STRING,
    fecha: DataTypes.INTEGER,
    calificacion: DataTypes.INTEGER,
    id_genero: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PeliculasSeries',
  });
  return PeliculasSeries;
};