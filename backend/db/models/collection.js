'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define('Collection', {
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER
  }, {});
  Collection.associate = function(models) {
    // associations can be defined here
  };
  return Collection;
};