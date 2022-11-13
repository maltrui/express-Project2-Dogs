const User = require('../models/user')
const Post = require('../models/post')

const fetch = require('node-fetch');
const rootUrl = 'https://random.dog/woof.json'

module.exports = {
    createPost,
}

function createPost(req, res){
    req.body.user = req.user._id
    Post.create(req.body, function(err, createdPost){
        if(err){
            console.log(err)
        }
        res.redirect('/post')
    })
}
