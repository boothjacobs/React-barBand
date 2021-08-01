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
     artistId: {
        allowNull: false,
        references: { model: "Artists" },
        type: Sequelize.INTEGER
      },
      originalArtist: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      albumId: {
        allowNull: false,
        references: { model: "Albums" },
        type: Sequelize.INTEGER
      },
      fileUrl: {
        type: Sequelize.TEXT
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
