'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    artistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Artists" }
    },
    originalArtist: {
      type: DataTypes.STRING
    },
    albumId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Albums" }
    },
    fileUrl: DataTypes.TEXT,
    originalArtist: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
    Song.belongsTo(models.Artist, { foreignKey: 'artistId' });
    Song.belongsTo(models.Album, { foreignKey: 'albumId' });
  };
  return Song;
};
