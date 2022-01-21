'use strict';
const generos= require("../../data/generos.json")

let arrayGeneros = generos.map(genero=>{
  let genres= {
    nombre: genero ,
    imagen:`${genero}.jpg`,
    createdAt: new Date,
    updatedAt: new Date
  }
  return genres
})

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Generos', arrayGeneros, {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Generos', {});
  }
};
