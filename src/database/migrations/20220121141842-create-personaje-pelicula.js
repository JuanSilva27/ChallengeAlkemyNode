'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PersonajePeliculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_personaje: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"Personajes",
          key:"id"
        }
      },
      id_pelicula: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"PeliculasSeries",
          key:"id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PersonajePeliculas');
  }
};