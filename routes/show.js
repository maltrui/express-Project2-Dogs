const express = require('express');
const router = express.Router();
const showController = require('../controllers/show')


router.get('/post/:id', showController.index)
router.post('/post/:id/comment', showController.createComment)



module.exports = router;