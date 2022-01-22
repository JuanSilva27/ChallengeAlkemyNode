'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personajes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({PeliculasSeries}) {
      this.belongsToMany(PeliculasSeries,{
        as:"peliculas",
        through:"PersonajePelicula",
        foreignKey:"id_personaje",
        otherKey:"id_pelicula"
      })
    }
  }
  Personajes.init({
    imagen: DataTypes.STRING,
    nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    peso: DataTypes.INTEGER,
    historia: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Personajes',
  });
  return Personajes;
};