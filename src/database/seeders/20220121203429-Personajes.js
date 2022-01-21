'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Personajes', [
    {
      imagen:"Mickey_Mouse.jpg",
      nombre:"Mickey Mouse",
      edad:90,
      peso:40,
      historia:"Mickey Mouse es un personaje ficticio de la serie del mismo nombre, emblema de la compañía Disney",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      imagen:"Pato_Donald.jpg",
      nombre:"Pato Donald",
      edad:80,
      peso:45,
      historia:"El Pato Donald​ es un personaje de Disney, caracterizado como un pato blanco antropomórfico de ojos celestes, pico, piernas y pies anaranjados",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      imagen:"Goofy.jpg",
      nombre:"Goofy",
      edad:80,
      peso:70,
      historia:"Goofy es un personaje de ficción creado por Walt Disney",
      createdAt: new Date,
      updatedAt: new Date
    },

  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Personajes', null, {});

  }
};
