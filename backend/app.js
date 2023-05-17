require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Require routes
const homeWebRouter = require('./routers/web/home-web-router');
const itemWebRouter = require('./routers/web/items-web-router');

const itemApiRouter = require('./routers/api/items-api-router');
const recipeApiRouter = require('./routers/api/recipe-api-router');
const userApiRouter = require('./routers/api/base-api-router');

<<<<<<< Updated upstream
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('MDB connected...'))
    .catch(err => console.log(err));

const app = express();

app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs' // default ".handlebars"
}));
=======
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('MDB connected...'))
  .catch((err) => console.log(err));

const app = express();

app.engine(
  'hbs',
  exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs', // default ".handlebars"
  })
);
>>>>>>> Stashed changes

app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// Use routes
app.use('/', homeWebRouter);
app.use('/items', itemWebRouter);
app.use('/api/items', itemApiRouter);
app.use('/api/recipes', recipeApiRouter);
app.use('/api/index', userApiRouter);
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
<<<<<<< Updated upstream
    console.log(`http://localhost:${PORT}/`);
});
=======
  console.log(`http://localhost:${PORT}/`);
});
>>>>>>> Stashed changes
