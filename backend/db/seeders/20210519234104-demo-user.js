'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Demo-lition',
        email: 'demo@user.io',
        location: null,
        bio: null,
        hashedPassword: bcrypt.hashSync('password'),
        profileImage: "https://images.unsplash.com/photo-1621516829665-a5ba55525542?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      },
      {
        username: 'FakeUser1',
        email: faker.internet.email(),
        location: null,
        bio: null,
        hashedPassword: bcrypt.hashSync('password'),
        profileImage: "https://images.unsplash.com/photo-1618397364665-fe3f5fe96ca5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      },
      {
        username: 'FakeUser2',
        email: faker.internet.email(),
        location: null,
        bio: null,
        hashedPassword: bcrypt.hashSync('password'),
        profileImage: "https://images.unsplash.com/photo-1613425757001-dc238f3a077d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=80"
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
