const User = require('../models/user')
const Post = require('../models/post')

module.exports = {
    index,
    createComment
}

function index(req, res){
    Post.findById(req.params.id, function(err, post){
        res.render('comments/userComment', {title: 'Show Dogs', post})
    })
}

function createComment(req,res){
    console.log(Post)
    console.log(req.params.id)
    Post.findById(req.params.id, function(err, post) {
        console.log(req.body)
        console.log(post)
        req.body.commentUser = req.user._id
        console.log(req.body)
        post.userComments.push(req.body)
            post.save(function(err){
            res.redirect(`/post/${post._id}`)
        })
    })
}


