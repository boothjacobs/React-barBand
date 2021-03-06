'use strict';
const bcrypt = require('bcryptjs');
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 200]
      }
    },
    location: {
      type: DataTypes.STRING,
    },
    bio: {
      type: DataTypes.TEXT,
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      }
    },
    profileImage: DataTypes.STRING,
  },
   {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Comment, { foreignKey: 'userId' });
    const collectionMapping = {
      through: 'Collection',
      otherKey: 'albumId',
      foreignKey: 'userId'
    }
    User.belongsToMany(models.Album, collectionMapping);
    User.hasMany(models.Collection, { foreignKey: 'userId' });
  };

//instance methods
  User.prototype.toSafeObject = function() {
    //front-end friendly data only
    const { id, username, email, location, bio, profileImage } = this;
    return { id, username, email, location, bio, profileImage };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
   };

//static methods
User.getCurrentUserById = async function (id) {
  return await User.scope('currentUser').findByPk(id);
 };

User.login = async function ({ credential, password }) {
  const { Op } = require('sequelize');
  const user = await User.scope('loginUser').findOne({
    where: {
      [Op.or]: {
        username: credential,
        email: credential,
      },
    },
  });
  if (user && user.validatePassword(password)) {
    return await User.scope('currentUser').findByPk(user.id);
  }
};

User.signup = async function ({ username, email, location, bio, password, profileImage }) {
  const hashedPassword = bcrypt.hashSync(password);
  const user = await User.create({
    username, email, location, bio, hashedPassword, profileImage
  });
  return await User.scope('currentUser').findByPk(user.id);
};

return User;
};
