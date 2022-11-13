const User = require('../models/user')
const Post = require('../models/post')

module.exports = {
    index,
    createComment,
    editPost,
    updatePost,
    deletePost,
    editComment,
    updateComment,
    deleteComment
}

function index(req, res){
    Post.findById(req.params.id).populate('user userComments.commentUser').exec(function(err, post){
            console.log(post)
            res.render('comments/userComment', {title: 'Show Dogs', post})
    })
}

function createComment(req,res){
    Post.findById(req.params.id, function(err, post) {
        req.body.commentUser = req.user._id
        post.userComments.push(req.body)
            post.save(function(err){
            res.redirect(`/post/${post._id}`)
        })
    })
}

function editPost(req,res){
    Post.findById(req.params.id, function(err, post) {
        res.render('comments/editPost', {title: 'Show Dogs', post})
    })
}

function updatePost(req,res){
    Post.findById(req.params.id, function(err,post){
        post.content = req.body.content
        post.rating = req.body.rating
        post.save(function(err){
            res.redirect(`/post/${post._id}`)
        })
    })
}

function deletePost(req,res){
    Post.findById(req.params.id, function(err,post){
        post.remove().then(function(){
            Post.find({},function(err, photos){
                if (err){
                    console.log(err)
                }
                console.log(photos)
                res.render('post', { title: "Posts", photos} )
            })
        })
    })
}

function editComment(req,res){
    Post.findOne({'userComments._id': req.params.id}).then(function(post){
        let comment = post.userComments.id(req.params.id)
        res.render('comments/editComment', {title: 'Show Dogs', comment})
    })
}

function updateComment(req,res){
    Post.findOne({'userComments._id': req.params.id}).then(function(post){
        let comment = post.userComments.id(req.params.id)
        comment.commentContent = req.body.commentContent
        comment.commentRating = req.body.commentRating
        console.log(comment)
        post.save().then(function(){
            res.redirect(`/post/${post._id}`)
        })
    })
}

function deleteComment(req,res){
    Post.findOne({'userComments._id': req.params.id}).then(function(post){
        let comment = post.userComments.id(req.params.id)
        comment.remove()
        post.save().then(function(){
            res.redirect(`/post/${post._id}`)
        })
    })
}

