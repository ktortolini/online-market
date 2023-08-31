// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
	{
		// todo: define columns
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
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
