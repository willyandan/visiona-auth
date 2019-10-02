'use strict';
const { hashPassword } = require('../../src/services/user')
module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Willyan Antunes',
        email: 'willyan.dantunes@gmail.com',
        password: hashPassword('123'),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
