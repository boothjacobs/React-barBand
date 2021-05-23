'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imgUrl: DataTypes.STRING,
    description: DataTypes.STRING
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
