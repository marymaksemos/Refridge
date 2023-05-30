const express = require('express');
const router = express.Router();
const controller = require('./../../controllers/web/items-web-controller');
const authMiddleware = require ('../../middleware/auth-middleware')
router.get('/', controller.showAll);

router.get('/new', authMiddleware, controller.showCreateForm)

router.get('/edit/:id', authMiddleware, controller.showEditForm);

router.delete('/:id', authMiddleware, controller.deleteItem);

router.put('/:id', authMiddleware, controller.updateItem);

router.get('/:id', authMiddleware, controller.showOne);



module.exports = router;