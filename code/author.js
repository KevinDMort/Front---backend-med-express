const { DataTypes } = require('sequelize/types');
const { sequelize } = require('./db');

const Author = sequelize.define('Author', {
    // Our primaryKey, author id, our unique identifier
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },

    // A column for the 
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    indexes: [
        { unique: true, fields: ['id'] },
    ]
});

// `sequelize.define` also returns the model
console.log(Author === sequelize.models.Author); // true

module.exports = { 
    Author 
}