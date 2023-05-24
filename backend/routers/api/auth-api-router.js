const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/auth-api-controller');

router.post('/register', controller.register);

router.post('/login', controller.login);

router.get('/users', controller.getAllUsers);

module.exports = router;
