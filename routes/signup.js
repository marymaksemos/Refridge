const express = require('express');
const router = express.Router();
const User = require('../models/Users-model');

router.get('/signup', (req, res) => {
  res.render('signup.hbs', { title: 'Express' });
});

/* router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });
  try {
    await user.save();
    req.session.userId = user._id;
    res.redirect('/');
  } catch (err) {
    res.render('error.hbs', { error: err.message });
  }
}); */

module.exports = router;