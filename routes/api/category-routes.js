const router = require('express').Router();
const { Category, Product } = require('../../models');

// the `/api/categories` endpoint
// gets all of the categories
router.get('/', async (req, res) => {
	// todo: find all categories
	// todo: be sure to include its associated Products
	try {
		const categoryData = await Category.findAll({
			include: [{ model: Product }],
		});
		// checks if there is a category
		if (!categoryData) {
			res.status(404).json({ message: 'No category found with this id!' });
			return;
		} else {
			res.status(200).json(categoryData);
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

// gets a single category
router.get('/:id', async (req, res) => {
	// todo: find one category by its `id` value
	// todo: be sure to include its associated Products
	try {
		const categoryData = await Category.findByPk(req.params.id, {
			include: [{ model: Product }],
		});
		// checks if there is a category
		if (!categoryData) {
			res.status(404).json({ message: 'No category found with this id!' });
			return;
		} else {
			res.status(200).json(categoryData);
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/', async (req, res) => {
	// todo: create a new category
	try {
		const categoryData = await Category.create(req.body);
		res.status(200).json(categoryData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put('/:id', async (req, res) => {
	// todo: update a category by its `id` value
	try {
		const categoryData = await Category.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		// checks if there is a category
		if (!categoryData) {
			res.status(404).json({ message: 'No category found with this id!' });
			return;
		} else {
			res.status(200).json(categoryData);
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete('/:id', (req, res) => {
	// todo: delete a category by its `id` value
	try {
		const categoryData = Category.destroy({
			where: {
				id: req.params.id,
			},
		});
		// checks if there is a category
		if (!categoryData) {
			res.status(404).json({ message: 'No category found with this id!' });
			return;
		} else {
			res.status(200).json(categoryData);
		}
	} catch {
		res.status(500).json(err);
	}
});

module.exports = router;
