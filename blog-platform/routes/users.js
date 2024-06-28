const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.register);
// Agrega más rutas según sea necesario

module.exports = router;
