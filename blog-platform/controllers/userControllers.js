const User = require('../models/userModel');

exports.register = (req, res) => {
  const newUser = req.body;
  User.create(newUser, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'User registered successfully', userId: results.insertId });
  });
};

// Agrega más métodos según sea necesario
