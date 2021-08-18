const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;
const User = require("../models/user");

function authenticate(req, res, next) {
  let token = req.get("Authorization") || req.query.token || req.body.token;

  if (token) {
    token = token.replace("Bearer ", "");

    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) {
        res.status(403).json({ message: "Invalid token." });
      } else {
        User.findById(decoded.user._id)
          .then(user => {
            if (!user) {
              req.user = null;
            }
            req.user = decoded.user;
            next();
          })
          .catch(err => {
            res.status(500).json({ message: "Internal Error, unable to authenticate." });
          });
      }
    });
  } else {
    res.status(403).json({ message: "Token required." });
  }
}

module.exports = authenticate;
