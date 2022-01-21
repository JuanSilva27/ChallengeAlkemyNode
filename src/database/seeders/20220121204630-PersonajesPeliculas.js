'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('PersonajePeliculas', [
      {
        id_personaje:1,
        id_pelicula:1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id_personaje:1,
        id_pelicula:2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id_personaje:1,
        id_pelicula:3,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id_personaje:1,
        id_pelicula:4,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id_personaje:1,
        id_pelicula:5,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id_personaje:2,
        id_pelicula:3,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id_personaje:2,
        id_pelicula:4,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id_personaje:2,
        id_pelicula:5,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id_personaje:2,
        id_pelicula:8,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id_personaje:2,
        id_pelicula:9,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id_personaje:3,
        id_pelicula:3,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id_personaje:3,
        id_pelicula:4,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id_personaje:3,
        id_pelicula:5,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id_personaje:3,
        id_pelicula:6,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id_personaje:3,
        id_pelicula:7,
        createdAt: new Date,
        updatedAt: new Date
      },{
        id_personaje:3,
        id_pelicula:9,
        createdAt: new Date,
        updatedAt: new Date
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('PersonajePeliculas', null, {});
     
  }
};
