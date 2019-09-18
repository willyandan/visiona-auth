var express = require('express');
const auth = require('./auth');
var router = express.Router();


router.use('/auth',auth);

module.exports = router;
