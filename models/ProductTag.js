// imports important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// imports our database connection from config.js
const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
	{
		// creates the 'id' column
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		// creates the 'product_id' column
		product_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'product',
				key: 'id',
			},
		},
		// creates the 'tag_id' column
		tag_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'tag',
				key: 'id',
			},
		},
	},
	{
		sequelize,
		timestamps: false,
		underscored: true,
		freezeTableName: true,
		modelName: 'product_tag',
	},
);

module.exports = ProductTag;
