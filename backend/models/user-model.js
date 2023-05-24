const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

<<<<<<< Updated upstream
module.exports = mongoose.model('User', userSchema);
=======
module.exports = mongoose.model('User', userSchema);
>>>>>>> Stashed changes
