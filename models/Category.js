// imports important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// imports our database connection from config.js
const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
	{
		// creates the 'id' column
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		// creates the 'category_name' column
		category_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: false,
		underscored: true,
		freezeTableName: true,
		modelName: 'category',
	},
);

module.exports = Category;
