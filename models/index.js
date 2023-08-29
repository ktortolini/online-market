// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// todo: Products belongsTo Category

// todo: Categories have many Products

// todo: Products belongToMany Tags (through ProductTag)

// todo: Tags belongToMany Products (through ProductTag)

module.exports = {
	Product,
	Category,
	Tag,
	ProductTag,
};
