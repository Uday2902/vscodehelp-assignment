const express = require('express');
const router = express.Router();

const controllers = require('../controllers/index');

router.route('/:name').get(controllers.doctorInfo);

module.exports = router;