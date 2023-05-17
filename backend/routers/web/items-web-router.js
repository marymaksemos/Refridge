const express = require('express');
const router = express.Router();
const controller = require('./../../controllers/web/items-web-controller');

router.get('/', controller.showAll);

router.get('/new', controller.showCreateForm);

router.get('/edit/:id', controller.showEditForm);

router.delete('/:id', controller.deleteItem);

router.put('/:id', controller.updateItem);

router.get('/:id', controller.showOne);



module.exports = router;