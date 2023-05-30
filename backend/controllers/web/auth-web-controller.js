const User = require('../../models/user-model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

    // Render registration form
    registerForm: (req, res) => {
        res.render('user/register');
    },

    // Register new user and redirect
    register: async (req, res) => {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ name, email, password: hashedPassword })
        res.redirect('/login');
    },

    // Render login form
    loginForm: (req, res) => {
        res.render('user/login');
    },

    // Login as existing user and redirect
    login: async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select("+password")

        if (!user) {
            res.status(400).send("Invalid credentials");
            return;
        }

        const correctPassword = await bcrypt.compare(password, user.password);

        if (!correctPassword) {
            res.status(400).send("Invalid credentials");
            return;
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // expires in 1 hour
        res.cookie('token', token, { httpOnly: true });

        // Add more user session logic here if needed

        res.redirect('/');
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.find({});
            res.render('userList', { users: users }); 
        } catch (err) {
            console.error(err);
            res.status(500).send("Internal server error!");
        }
    }
};
