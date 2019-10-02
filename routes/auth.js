const express = require('express');
const authController = require('../src/controllers/auth')
const router = express.Router();

router.post('/',authController.authenticate)
router.post('/refresh',authController.refresh)
router.get('/',authController.getData)

module.exports = router;
