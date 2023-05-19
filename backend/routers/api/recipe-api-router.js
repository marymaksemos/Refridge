const express = require('express');
const router = express.Router();
const controller = require('./../../controllers/api/recipe-api-controller');

router.get('/', controller.getAll);

router.post('/', controller.create);

router.get('/:id', controller.getOne);

module.exports = router;
