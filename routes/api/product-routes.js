const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// the `/api/products` endpoint

// gets all products
router.get('/', async (req, res) => {
	// finds all products
	try {
		const productData = await Product.findAll({
			include: [{ model: Category }, { model: Tag }],
		});
		// checks if there are products
		if (!productData) {
			// responds with an error message if there is nothing
			res.status(404).json({ message: 'No products found!' });
			return;
		} else {
			// otherwise, responds with the data
			res.status(200).json(productData);
		}
	} catch (err) {
		// returns an error message
		res.status(500).json(err);
	}
});

// gets one product
router.get('/:id', async (req, res) => {
	// finds a single product by its `id`
	try {
		const productData = await Product.findByPk(req.params.id, {
			include: [{ model: Category }, { model: Tag }],
		});
		// checks if there is a product
		if (!productData) {
			// responds with an error message if there is nothing
			res.status(404).json({ message: 'No product found with this id!' });
			return;
		} else {
			// otherwise, responds with the data
			res.status(200).json(productData);
		}
	} catch (err) {
		// returns an error message
		res.status(500).json(err);
	}
});

// creates new product
router.post('/', (req, res) => {
	/* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
	Product.create(req.body)
		.then((product) => {
			// if there's product tags, we need to create pairings to bulk create in the ProductTag model
			if (req.body.tagIds.length) {
				const productTagIdArr = req.body.tagIds.map((tag_id) => {
					return {
						product_id: product.id,
						tag_id,
					};
				});
				return ProductTag.bulkCreate(productTagIdArr);
			}
			// if no product tags, just respond
			res.status(200).json(product);
		})
		.then((productTagIds) => res.status(200).json(productTagIds))
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		});
});

// updates the product
router.put('/:id', (req, res) => {
	// updates product data
	Product.update(req.body, {
		// uses the `id` value to find the product
		where: {
			id: req.params.id,
		},
	})
		.then((product) => {
			if (req.body.tagIds && req.body.tagIds.length) {
				ProductTag.findAll({
					where: { product_id: req.params.id },
				}).then((productTags) => {
					// creates filtered list of new tag_ids
					const productTagIds = productTags.map(({ tag_id }) => tag_id);
					const newProductTags = req.body.tagIds
						.filter((tag_id) => !productTagIds.includes(tag_id))
						.map((tag_id) => {
							return {
								product_id: req.params.id,
								tag_id,
							};
						});

					// figures out which ones to remove
					const productTagsToRemove = productTags
						.filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
						.map(({ id }) => id);
					// runs both actions
					return Promise.all([
						ProductTag.destroy({ where: { id: productTagsToRemove } }),
						ProductTag.bulkCreate(newProductTags),
					]);
				});
			}

			return res.json(product);
		})
		.catch((err) => {
			// console.log(err);
			res.status(400).json(err);
		});
});

router.delete('/:id', (req, res) => {
	// deletes one product by its `id` value
	try {
		const productData = Product.destroy({
			// uses the `id` value to find the product
			where: {
				id: req.params.id,
			},
		});
		// checks if there is a category
		if (!productData) {
			// responds with an error message if there is nothing
			res.status(404).json({ message: 'No product found with this id!' });
			return;
		} else {
			// otherwise, responds with the data
			res.status(200).json(productData);
		}
	} catch {
		// returns an error message
		res.status(500).json(err);
	}
});

module.exports = router;
