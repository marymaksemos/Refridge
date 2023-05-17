const express = require('express');
const router = express.Router();
const controller = require('./../../controllers/api/items-api-controller')

// Get all items
router.get('/', controller.getAll);

// Create item
router.post('/', controller.create);
// Edit item
router.put('/:id', controller.update);
console.log(controller);

// Get one item
router.get('/:id', controller.getOne);


// Delete item
router.delete('/:id', controller.delete);

module.exports = router;