const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('./db')

const Book = sequelize.define('Book', {
    // Here we define our model attributes
    // Each attribute will pair to a column in our database

    // Our primaryKey, book id, our unique identifier
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
        primaryKey: true,
    },

    // A column for the title of our book
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    // A column for the author Id foreing key
    AuthorId: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    indexes: [
        { unique: true, fields: ['id'] },
        { unique: false, fields: ['AuthorId'] },
    ]
});

// `sequelize.define` also returns the model
console.log(Book === sequelize.models.Book); // true

module.exports = { 
    Book 
}