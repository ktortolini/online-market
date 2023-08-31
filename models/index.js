// import models
const Tag = require('./Tag');
const Product = require('./Product');
const Category = require('./Category');
const ProductTag = require('./ProductTag');

// todo: Products belongsTo Category
Product.belongsTo(Category, {
	foreignKey: 'category_id',
});

// todo: Categories have many Products
Category.hasMany(Product, {
	foreignKey: 'category_id',
	onDelete: 'CASCADE',
});

// todo: Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
	through: ProductTag,
	foreignKey: 'product_id',
});

// todo: Tags belongToMany Products (through ProductTag)
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
