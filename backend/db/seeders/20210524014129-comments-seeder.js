'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Comments', [
        {body: "Wall to wall bops", userId: 1, albumId: 2, createdAt: new Date(), updatedAt: new Date()},
        {body: "A lot of all time greats on here", userId: 1, albumId: 3, createdAt: new Date(), updatedAt: new Date()},
        {body: "hell yeah", userId: 3, albumId: 1, createdAt: new Date(), updatedAt: new Date()},
        {body: "Wall to wall bops", userId: 3, albumId: 3, createdAt: new Date(), updatedAt: new Date()},
        {body: "a classic album", userId: 1, albumId: 1, createdAt: new Date(), updatedAt: new Date()}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Comments', null, {});
  }
};
