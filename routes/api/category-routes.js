const router = require('express').Router();
const { Category, Product } = require('../../models');

// the `/api/categories` endpoint
// gets all of the categories
router.get('/', async (req, res) => {
	// finds all of the categories
	try {
		const categoryData = await Category.findAll({
			include: [{ model: Product }],
		});
		// checks if there is a category
		if (!categoryData) {
			// responds with an error message if there is nothing
			res.status(404).json({ message: 'No category found with this id!' });
			return;
		} else {
			// otherwise, responds with the data
			res.status(200).json(categoryData);
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

// gets a single category
router.get('/:id', async (req, res) => {
	// finds one category by its `id` value
	try {
		const categoryData = await Category.findByPk(req.params.id, {
			include: [{ model: Product }],
		});
		// checks if there is a category
		if (!categoryData) {
			// responds with an error message if there is nothing
			res.status(404).json({ message: 'No category found with this id!' });
			return;
		} else {
			// otherwise, responds with the data
			res.status(200).json(categoryData);
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/', async (req, res) => {
	// creates a new category
	try {
		const categoryData = await Category.create(req.body);
		// responds with the data
		res.status(200).json(categoryData);
	} catch (err) {
		// ..unless there is an error
		res.status(500).json(err);
	}
});

router.put('/:id', async (req, res) => {
	// updates a category by its `id` value
	try {
		const categoryData = await Category.update(req.body, {
			// uses the `id` value to find the category
			where: {
				id: req.params.id,
			},
		});
		// checks if there is a category
		if (!categoryData) {
			// responds with an error message if there is nothing
			res.status(404).json({ message: 'No category found with this id!' });
			return;
		} else {
			// otherwise, responds with the data
			res.status(200).json(categoryData);
		}
	} catch (err) {
		// returns an error message
		res.status(500).json(err);
	}
});

router.delete('/:id', (req, res) => {
	// deletes a category by its `id` value
	try {
		const categoryData = Category.destroy({
			// uses the `id` value to find the category
			where: {
				id: req.params.id,
			},
		});
		// checks if there is a category
		if (!categoryData) {
			// responds with an error message if there is nothing
			res.status(404).json({ message: 'No category found with this id!' });
			return;
		} else {
			// otherwise, responds with the data
			res.status(200).json(categoryData);
		}
	} catch {
		// returns an error message
		res.status(500).json(err);
	}
});

module.exports = router;
