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
        username: 'Bruce',
        email: 'demo@user.io',
        location: 'Hoegermouth, CO',
        bio: 'Voluptates sit praesentium eos.',
        hashedPassword: bcrypt.hashSync('password'),
        profileImage: "https://www.insidehook.com/wp-content/uploads/2016/10/Springsteen-2_1200-e1477589531774-1-1.jpg?fit=857%2C1200"
      },
      {
        username: 'Demo-lition',
        email: faker.internet.email(),
        location: 'South Maximo, MN',
        bio: null,
        hashedPassword: bcrypt.hashSync('password'),
        profileImage: faker.internet.avatar()
      },
      {
        username: 'Demo-lition',
        email: faker.internet.email(),
        location: 'North Kyleightown, IA',
        bio: 'Perferendis minus qui.',
        hashedPassword: bcrypt.hashSync('password'),
        profileImage: faker.internet.avatar()
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
        bio: 'Aut maiores sapiente quae earum ducimus magni occaecati totam iste.',
        hashedPassword: bcrypt.hashSync('password'),
        profileImage: "https://images.unsplash.com/photo-1613425757001-dc238f3a077d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=80"
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', null, {});
  }
};
