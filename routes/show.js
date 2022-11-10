const express = require('express');
const router = express.Router();
const showController = require('../controllers/show')


router.get('/post/:id', showController.index)
router.post('/post/:id/comment', showController.createComment)
router.get('/post/:id/edit', showController.editPost)
router.put('/post/:id', showController.updatePost)
router.delete('/post/:id', showController.deletePost)
router.get('/post/:id/comment/edit', showController.editComment)
router.put('/post/:id/comment', showController.updateComment)
router.delete('/post/:id/comment', showController.deleteComment)
module.exports = router;