'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    location: DataTypes.STRING(50)
  }, {});
  Artist.associate = function(models) {
    // associations can be defined here
    Artist.hasMany(models.Song, { foreignKey: 'artistId' });
  };
  return Artist;
};
