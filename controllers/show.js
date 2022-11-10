const User = require('../models/user')
const Post = require('../models/post')

module.exports = {
    index,
    createComment,
    edit,
    updatePost,
    deletePost
}

function index(req, res){
    Post.findById(req.params.id, function(err, post){
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

function edit(req,res){
    console.log('here')
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
