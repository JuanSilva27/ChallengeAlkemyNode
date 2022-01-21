'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('PeliculasSeries', [
      {
        imagen: "Fantasia.jpg",
        titulo: "Fantasia",
        calificacion: 10,
        id_genero: 3,
        fecha: 1940,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        imagen: "Barco_de_vapor_de_Willie.jpg",
        titulo: "Barco de vapor de Willie",
        calificacion: 9,
        id_genero: 4,
        fecha: 1928 ,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        imagen: "Mickey_Donald_Goofy:Los_tres_Mosquteros.jpg",
        titulo: "Mickey, Donald, Goofy:Los tres Mosquteros",
        calificacion: 8,
        id_genero: 4,
        fecha: 2004,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        imagen: "El_principe_y_el_mendigo.jpg",
        titulo: "El principe y el mendigo",
        calificacion: 7,
        id_genero: 4,
        fecha: 1990,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        imagen: "La_Navidad_Mágica_de_Mickey.jpg",
        titulo: "La Navidad Mágica de Mickey",
        calificacion: 8,
        id_genero: 1,
        fecha: 2001,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        imagen: "Goofy_la_Película.jpg",
        titulo: "Goofy la Película",
        calificacion: 10,
        id_genero: 2,
        fecha: 1995,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        imagen: "Extremadamente_Goofy.jpg",
        titulo: "Extremadamente Goofy",
        calificacion: 8,
        id_genero: 2,
        fecha: 2000,
        createdAt: new Date,
        updatedAt: new Date
      }, 
      {
        imagen: "Los_Tres_Caballeros.jpg",
        titulo: "Los Tres Caballeros",
        calificacion: 7,
        id_genero: 5,
        fecha: 1977,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        imagen: "Saludos_Amigos.jpg",
        titulo: "Saludos Amigos",
        calificacion: 8,
        id_genero: 1,
        fecha: 1943 ,
        createdAt: new Date,
        updatedAt: new Date
      },    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('PeliculasSeries', null, {});

  }
};
