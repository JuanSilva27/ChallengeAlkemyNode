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
        type: Sequelize.STRING(45),
        allowNull:false
      },
      titulo: {
        type: Sequelize.STRING(45),
        allowNull:false
      },
      fecha: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      calificacion: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      id_genero: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"Generos",
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
    await queryInterface.dropTable('PeliculasSeries');
  }
};