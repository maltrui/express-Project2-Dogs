const User = require('../models/user')
const Post = require('../models/post')
const Photo = require('../models/photo')

module.exports = {
    index,
    createComment
}

function index(req, res){
    Photo.findById(req.params.id, function(err, post){
        Post.find({post: post._id}, function(err, comment){
            res.render('comments/userComment', {title: 'Show Dogs', post, comment})
        })
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
        //post.userComments.push(req.body)
        //post.save(function(err){
        //    res.redirect(`/post/${post._id}`)
        //})
    })
}


