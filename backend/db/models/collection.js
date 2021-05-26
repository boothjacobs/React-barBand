'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define('Collection', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" }
    },
    albumId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Albums" }
    }
  }, {});
  Collection.associate = function(models) {
    // associations can be defined here
    Collection.belongsTo(models.User, { foreignKey: 'userId' });
    Collection.belongsTo(models.Album, { foreignKey: 'albumId' });
  };
  return Collection;
};
