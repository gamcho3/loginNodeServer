const express = require('express');
const indexController = require('../controllers/index');
const router = express.Router();


/* GET home page. */
router.get('/', indexController.getPosts);

module.exports = router;
