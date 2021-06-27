const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll();
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
    include: [{ all: true, nested: true }]  // From https://stackoverflow.com/questions/46614290/sequelize-eager-loading-error
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id.' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
    /* req.body should look like this... 
    {
      tag_id: tag.id,
      tag_name: "Yellow"
    }
  */
    try {
      const tagData = await Tag.create(req.body);
      // console.log('}}}}}}}}}}}}}}');
      // console.log(tagData);
      res.status(200).json(tagData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
