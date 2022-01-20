'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PeliculasSeries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imagen: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATE
      },
      calificacion: {
        type: Sequelize.INTEGER
      },
      id_genero: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('PeliculasSeries');
  }
};