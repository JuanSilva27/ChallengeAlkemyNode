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
    static associate({PeliculasSeries}) {
     
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