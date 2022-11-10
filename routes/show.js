const express = require('express');
const router = express.Router();
const showController = require('../controllers/show')


router.get('/post/:id', showController.index)
router.post('/post/:id/comment', showController.createComment)
router.get('/post/:id/edit', showController.edit)
router.put('/post/:id', showController.updatePost)
router.delete('/post/:id', showController.deletePost)

module.exports = router;