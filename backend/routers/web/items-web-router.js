const express = require('express');
const router = express.Router();
const controller = require('./../../controllers/web/items-web-controller');
const authMiddleware = require('../../middleware/auth-middleware');

// Show all items
router.get('/', authMiddleware, controller.showAll);

// Show create form
router.get('/new', authMiddleware, controller.showCreateForm);

// Create item
router.post('/', authMiddleware, controller.createItem);

// Show edit form
router.get('/edit/:id', authMiddleware, controller.showEditForm);

// Update item
router.put('/:id', authMiddleware, controller.updateItem);

// Delete item
router.delete('/:id', authMiddleware, controller.deleteItem);

// Show one item
router.get('/:id', authMiddleware, controller.showOne);

module.exports = router;