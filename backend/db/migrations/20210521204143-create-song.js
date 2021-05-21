'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      fileUrl: {
        type: Sequelize.STRING
      },
      originalArtist: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      albumId: {
        allowNull: false,
        references: { model: 'Album' },
        type: Sequelize.INTEGER
      },
      artistId: {
        allowNull: false,
        references: { model: 'Artist' },
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Songs');
  }
};
