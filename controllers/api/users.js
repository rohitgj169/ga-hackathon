const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
<<<<<<< HEAD
=======
    console.log('user created!')
>>>>>>> d0ea6a04dcb369ab3e06a32ad11fe7e908d2a8ab
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!(await bcrypt.compare(req.body.password, user.password))) throw new Error();
    const token = createJWT(user);

    res.status(200).json(token);
  } catch {
    res.status(400).json("Bad Credentials");
  }
}

function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

module.exports = {
  create,
  login,
};
