const express = require('express');
const router = express.Router();
const controller = require('./../../controllers/api/items-api-controller');
const authMiddleware = require('../../middleware/auth-middleware');

// Get all items
router.get('/', controller.getAll);

// Create item
router.post('/', authMiddleware, controller.create);
// Edit item
router.put('/:id', authMiddleware, controller.update);
console.log(controller);

// Get one item
router.get('/:id', controller.getOne);

// Delete item
router.delete('/:id', controller.delete);

module.exports = router;
