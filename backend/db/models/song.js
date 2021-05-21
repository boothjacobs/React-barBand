'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    fileUrl: DataTypes.STRING,
    originalArtist: DataTypes.STRING,
    albumId: DataTypes.INTEGER,
    artistId: DataTypes.INTEGER
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
  };
  return Song;
};