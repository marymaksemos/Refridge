const express = require('express');
const router = express.Router();
const controller = require('./../controllers/auth-web-controller');

router.get('/register', controller.registerForm);
router.post('/register', controller.register);
router.get('/login', controller.loginForm);
router.post('/login', controller.login);

module.exports = router;
