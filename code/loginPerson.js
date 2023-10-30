const { DataTypes } = require('sequelize');
const { sequelize } = require('./db'); // Import the sequelize instance from db.js

const LoginPerson = sequelize.define('LoginPerson', {
  username: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// `sequelize.define` also returns the model
console.log(LoginPerson === sequelize.models.LoginPerson); // true

module.exports = {
  LoginPerson,
  sequelize,
};
