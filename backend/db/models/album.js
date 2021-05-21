'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: DataTypes.STRING,
    imgUrl: DataTypes.STRING
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
    Album.hasMany(models.Song, { foreignKey: 'albumId' });
    Album.hasMany(models.Comment, { foreignKey: 'albumId' });
    const columnMapping = {
      through: 'Collection',
      otherKey: 'userId',
      foreignKey: 'albumId'
    }
    Album.belongsToMany(models.User, columnMapping);
  };
  return Album;
};
