require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');

// Require routes
const homeWebRouter = require('./routers/web/home-web-router');
const itemWebRouter = require('./routers/web/items-web-router');
const authWebRouter = require('./routers/web/auth-web-router');

const itemApiRouter = require('./routers/api/items-api-router');
const recipeApiRouter = require('./routers/api/recipe-api-router');
const userApiRouter = require('./routers/api/base-api-router');
const authApiRouter = require('./routers/api/auth-api-router');

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('MDB connected...'))
  .catch((err) => console.log(err));

const app = express();

app.engine(
  'hbs',
  exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs', // default '.handlebars'
  })
);

app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(cookieParser()); // kan tas bort efter react är klart

// Use routes
app.use('/', homeWebRouter);
app.use('/items', itemWebRouter);
app.use('/api/items', itemApiRouter);
app.use('/api/recipes', recipeApiRouter);
app.use('/api/index', userApiRouter);

// Use auth routes
app.use('/api/auth', authApiRouter);
app.use('/', authWebRouter); // '/register' and '/login' will be accessible from the root URL

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
