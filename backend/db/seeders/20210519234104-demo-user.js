'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Demo-lition',
        email: 'Evan.Monahan8@hotmail.com',
        location: null,
        bio: null,
        hashedPassword: bcrypt.hashSync('password'),
        profileImage: "https://cdn.fakercloud.com/avatars/dudestein_128.jpg"
      },
      {
        username: 'Bruce',
        email: 'Johnathan0@hotmail.com',
        location: 'Hoegermouth, CO',
        bio: 'Voluptates sit praesentium eos.',
        hashedPassword: bcrypt.hashSync('password'),
        profileImage: "https://www.insidehook.com/wp-content/uploads/2016/10/Springsteen-2_1200-e1477589531774-1-1.jpg?fit=857%2C1200"
      },
      {
        username: 'Jazmyn57',
        email: 'Wilfrid69@hotmail.com',
        location: 'South Maximo, MN',
        bio: null,
        hashedPassword: bcrypt.hashSync('password'),
        profileImage: 'https://cdn.fakercloud.com/avatars/llun_128.jpg'
      },
      {
        username: 'Lamar.Homenick',
        email: 'Wava.Beier15@yahoo.com',
        location: 'North Kyleightown, IA',
        bio: 'Perferendis minus qui.',
        hashedPassword: bcrypt.hashSync('password'),
        profileImage: 'https://cdn.fakercloud.com/avatars/hugomano_128.jpg'
      },
      {
        username: 'FakeUser1',
        email: 'Candelario.Bayer@hotmail.com',
        location: null,
        bio: null,
        hashedPassword: bcrypt.hashSync('password'),
        profileImage: "https://cdn.fakercloud.com/avatars/S0ufi4n3_128.jpg"
      },
      {
        username: 'Forest.Hills',
        email: 'Precious_Schiller@yahoo.com',
        location: null,
        bio: 'Aut maiores sapiente quae earum ducimus magni occaecati totam iste.',
        hashedPassword: bcrypt.hashSync('password'),
        profileImage: "https://cdn.fakercloud.com/avatars/horaciobella_128.jpg"
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', null, {});
  }
};
