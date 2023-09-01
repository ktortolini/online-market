// imports important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// imports our database connection from config.js
const sequelize = require('../config/connection');

// initializes Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// sets up fields and rules for Product model
Product.init(
	{
		// creates the 'id' column
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		// creates the 'product_name' column
		product_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		// creates the 'price' column
		price: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			validate: {
				isDecimal: true,
			},
		},
		// creates the 'stock' column
		stock: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 10,
			validate: {
				isNumeric: true,
			},
		},
		// creates the 'category_id' column
		category_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'category',
				key: 'id',
			},
		},
	},
	{
		sequelize,
		timestamps: false,
		underscored: true,
		modelName: 'product',
		freezeTableName: true,
	},
);

module.exports = Product;
