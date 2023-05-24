const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
  const authorization = req.headers.authorization; // Bearer 9h1we912j3e
  const token = authorization?.split(' ')[1]; // 9h1we912j3e

<<<<<<< Updated upstream
    if(!token){
        res.status(401).send('No token');
        return;
    }
=======
  if (!token) {
    res.status(401).send('No token');
    return;
  }
>>>>>>> Stashed changes

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;

<<<<<<< Updated upstream
        next();
    } catch (err) {
        res.status(401).send('Invalid token');
    }
=======
    next();
  } catch (err) {
    res.status(401).send('Invalid token');
  }
>>>>>>> Stashed changes
};

module.exports = authMiddleware;
