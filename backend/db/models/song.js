'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    fileUrl: DataTypes.STRING,
    originalArtist: {
      allowNull: false,
      type: DataTypes.STRING
    },
    albumId: DataTypes.INTEGER,
    artistId: DataTypes.INTEGER
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
    Song.belongsTo(models.Artist, { foreignKey: 'artistId' });
    Song.belongsTo(models.Album, { foreignKey: 'albumId' });
  };
  return Song;
};
