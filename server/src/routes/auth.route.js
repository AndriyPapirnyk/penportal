const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/check-user', authController.authUser)

module.exports = router;