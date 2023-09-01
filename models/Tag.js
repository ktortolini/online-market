// imports important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// imports our database connection from config.js
const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
	{
		// creates the 'id' column
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		// creates the 'tag_name' column
		tag_name: {
			type: DataTypes.STRING,
		},
	},
	{
		sequelize,
		modelName: 'tag',
		timestamps: false,
		underscored: true,
		freezeTableName: true,
	},
);

module.exports = Tag;
