const mongoose = require('mongoose');
mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb+srv://gustavwvjohansson:kBEpmXAUtCaPuAkP@refridgecluster.fieialy.mongodb.net/',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
console.log(process.env.MONGODB_URI);
