const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
	// finds all tags
	try {
		const tagData = await Tag.findAll({
			include: [{ model: Product }],
		});
		// returns the data
		res.status(200).json(tagData);
	} catch (err) {
		// returns an error message
		res.status(500).json(err);
	}
});

router.get('/:id', async (req, res) => {
	// finds a single tag by its `id`
	try {
		const tagData = await Tag.findByPk(req.params.id, {
			include: [{ model: Product }],
		});
		// checks if there is a category
		if (!tagData) {
			// responds with an error message if there is nothing
			res.status(404).json({ message: 'No category found with this id!' });
			return;
		} else {
			// otherwise, responds with the data
			res.status(200).json(tagData);
		}
	} catch (err) {
		// returns an error message
		res.status(500).json(err);
	}
});

router.post('/', async (req, res) => {
	// creates a new tag
	try {
		const tagData = await Tag.create(req.body);
		// returns the data
		res.status(200).json(tagData);
	} catch (err) {
		// returns an error message
		res.status(500).json(err);
	}
});

router.put('/:id', async (req, res) => {
	// updates a tag's name by its `id` value
	try {
		const tagData = await Tag.update(req.body, {
			// uses the `id` value to find the tag
			where: {
				id: req.params.id,
			},
		});
		// checks if there is a category
		if (!tagData) {
			// responds with an error message if there is nothing
			res.status(404).json({ message: 'No tag found with this id!' });
			return;
		} else {
			// ..otherwise, responds with the data
			res.status(200).json(tagData);
		}
	} catch (err) {
		// returns an error message
		res.status(500).json(err);
	}
});

router.delete('/:id', (req, res) => {
	// deletes on tag by its `id` value
	try {
		const tagData = Tag.destroy({
			// uses the `id` value to find the tag
			where: {
				id: req.params.id,
			},
		});
		// checks if there is a category
		if (!tagData) {
			// responds with an error message if there is nothing
			res.status(404).json({ message: 'No tag found with this id!' });
			return;
		} else {
			// ..otherwise, responds with the data
			res.status(200).json(tagData);
		}
	} catch {
		// returns an error message
		res.status(500).json(err);
	}
});

module.exports = router;
