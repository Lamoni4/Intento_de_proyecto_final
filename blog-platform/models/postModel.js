const db = require('../db');

const Post = {
  create: (postData, callback) => {
    const query = 'INSERT INTO posts (title, content, user_id, category) VALUES (?, ?, ?, ?)';
    db.query(query, [postData.title, postData.content, postData.user_id, postData.category], callback);
  },
  findAll: (callback) => {
    const query = 'SELECT * FROM posts';
    db.query(query, callback);
  },
  // Agrega más métodos según sea necesario
};

module.exports = Post;
