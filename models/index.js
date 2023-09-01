// imports models
const Tag = require('./Tag');
const Product = require('./Product');
const Category = require('./Category');
const ProductTag = require('./ProductTag');

// makes a relationship between Product and Category
Product.belongsTo(Category, {
	foreignKey: 'category_id',
});

// makes a relationship between Category and Product
Category.hasMany(Product, {
	foreignKey: 'category_id',
	onDelete: 'CASCADE',
});

// makes a relationship between Product and Tag
Product.belongsToMany(Tag, {
	through: ProductTag,
	foreignKey: 'product_id',
});

// makes a relationship between Tag and Product
Tag.belongsToMany(Product, {
	through: ProductTag,
	foreignKey: 'tag_id',
});

module.exports = {
	Tag,
	Product,
	Category,
	ProductTag,
};
