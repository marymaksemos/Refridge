const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
  const authorization = req.cookies.token; // Bearer 9h1we912j3e
  console.log(authorization);
  const token = authorization;

  if (!token) {
    res.status(401).send('No token');
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;

    next();
  } catch (err) {
    res.status(401).send('Invalid token');
    console.log(err);
  }
};

module.exports = authMiddleware;
