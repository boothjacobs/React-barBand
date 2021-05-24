'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Collections', [
        {userId: 1, albumId: 1, createdAt: new Date(), updatedAt: new Date() },
        {userId: 1, albumId: 8, createdAt: new Date(), updatedAt: new Date() },
        {userId: 2, albumId: 4, createdAt: new Date(), updatedAt: new Date() },
        {userId: 2, albumId: 5, createdAt: new Date(), updatedAt: new Date() },
        {userId: 2, albumId: 7, createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Collections', null, {});
  }
};
