const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
	// todo: find all tags
	// todo: be sure to include its associated Product data
	try {
		const tagData = await Tag.findAll({
			include: [{ model: Product }],
		});
		res.status(200).json(tagData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/:id', async (req, res) => {
	// todo: find a single tag by its `id`
	// todo: be sure to include its associated Product data
	try {
		const tagData = await Tag.findByPk(req.params.id, {
			include: [{ model: Product }],
		});
		// checks if there is a category
		if (!tagData) {
			res.status(404).json({ message: 'No category found with this id!' });
			return;
		} else {
			res.status(200).json(tagData);
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/', async (req, res) => {
	// todo: create a new tag
	try {
		const tagData = await Tag.create(req.body);
		res.status(200).json(tagData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put('/:id', async (req, res) => {
	// todo: update a tag's name by its `id` value
	try {
		const tagData = await Tag.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		// checks if there is a category
		if (!tagData) {
			res.status(404).json({ message: 'No tag found with this id!' });
			return;
		} else {
			res.status(200).json(tagData);
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete('/:id', (req, res) => {
	// todo: delete on tag by its `id` value
	try {
		const tagData = Tag.destroy({
			where: {
				id: req.params.id,
			},
		});
		// checks if there is a category
		if (!tagData) {
			res.status(404).json({ message: 'No tag found with this id!' });
			return;
		} else {
			res.status(200).json(tagData);
		}
	} catch {
		res.status(500).json(err);
	}
});

module.exports = router;
