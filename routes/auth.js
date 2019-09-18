const express = require('express');
const authController = require('../src/controllers/auth')
const router = express.Router();

router.get('/',authController.authenticate)

module.exports = router;
