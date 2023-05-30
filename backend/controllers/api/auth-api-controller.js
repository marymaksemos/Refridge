const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/user-model');

module.exports = {
  // Register new user
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        res.status(409).send('Email is in use');
        return;
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await User.create({ name, email, password: hashedPassword });

      res.sendStatus(201);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error!');
    }
  },

  // Login as existing user
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email }).select('+password');

      if (!user) {
        res.status(400).send('Invalid credential!');
        return;
      }

      const correctPassword = await bcrypt.compare(password, user.password);

      if (!correctPassword) {
        res.status(400).send('Invalid credential!');
        return;
      }

      const payload = {
        id: user._id,
        role: 'ADMIN',
        name: user.name,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET);

      res.send({ token });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error!');
    }
  },

  // Get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error!');
    }
  },
};
