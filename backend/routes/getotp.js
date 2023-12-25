const express = require('express');
const router = express.Router();

const controllers = require('../controllers/index');

router.route('/').post(controllers.getotp);

module.exports = router;