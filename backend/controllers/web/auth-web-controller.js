const User = require('../../models/user-model');
const bcrypt = require('bcrypt');

module.exports = {
  // Render registration form
  registerForm: (req, res) => {
    res.render('register');
  },

  // Register new user and redirect
  register: async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword });
    res.redirect('/login');
  },

<<<<<<< Updated upstream
    // Register new user and redirect
    register: async (req, res) => {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ name, email, password: hashedPassword });
        res.redirect('/login');
    },
=======
  // Render login form
  loginForm: (req, res) => {
    res.render('login');
  },
>>>>>>> Stashed changes

  // Login as existing user and redirect
  login: async (req, res) => {
    // Implement your login logic here
    // If successful:
    res.redirect('/dashboard');
  },

<<<<<<< Updated upstream
    // Login as existing user and redirect
    login: async (req, res) => {
        // Implement your login logic here
        // If successful:
        res.redirect('/dashboard');
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.find({});
            res.render('userList', { users: users }); 
        } catch (err) {
            console.error(err);
            res.status(500).send('Internal server error!');
        }
=======
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find({});
      res.render('userList', { users: users });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error!');
>>>>>>> Stashed changes
    }
  },
};
