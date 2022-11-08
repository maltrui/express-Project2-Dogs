const express = require('express');
const router = express.Router();
const postController = require('../controllers/post')

router.get('/post', postController.index) 

module.exports = router;