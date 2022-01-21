'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PersonajePelicula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PersonajePelicula.belongsToMany(models.PeliculasSeries,{
        as:"personaje",
        through:"PersonajePelicula",
        foreignKey:"id_pelicula",
        otherKey:"id_personaje"
      })
    }
  }
  PersonajePelicula.init({
    id_personaje: DataTypes.INTEGER,
    id_pelicula: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PersonajePelicula',
  });
  return PersonajePelicula;
};