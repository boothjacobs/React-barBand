'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Albums', [
        {title: "Say Goodbye To Pretty Boy", imgUrl: "https://f4.bcbits.com/img/a2944346038_16.jpg", createdAt: new Date(), updatedAt: new Date() },
        {title: "Emotion", imgUrl: "https://f4.bcbits.com/img/a2835557561_16.jpg", createdAt: new Date(), updatedAt: new Date() },
        {title: "ReRed", imgUrl: "https://f4.bcbits.com/img/a3907726339_16.jpg", createdAt: new Date(), updatedAt: new Date() },
        {title: "Don't Stop Now", imgUrl: "https://f4.bcbits.com/img/a0886591079_16.jpg", createdAt: new Date(), updatedAt: new Date() },
        {title: "Don't Stop Now: II", imgUrl: "https://f4.bcbits.com/img/a2755082232_16.jpg", createdAt: new Date(), updatedAt: new Date() },
        {title: "The Georgia EP", imgUrl: "https://f4.bcbits.com/img/a3267728222_10.jpg", createdAt: new Date(), updatedAt: new Date() },
        {title: "Save Stereogum", imgUrl: "https://f4.bcbits.com/img/a3972692566_10.jpg", createdAt: new Date(), updatedAt: new Date() }
      ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Albums', null, {});
  }
};
