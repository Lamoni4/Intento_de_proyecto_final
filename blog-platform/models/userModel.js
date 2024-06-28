const db = require('../db');

const User = {
  create: (userData, callback) => {
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [userData.username, userData.email, userData.password], callback);
  },
  findById: (id, callback) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], callback);
  },
  // Agrega más métodos según sea necesario
};

module.exports = User;
