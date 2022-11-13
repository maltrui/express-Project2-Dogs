const User = require('../models/user')
const Post = require('../models/post')

module.exports = {
    index,
}

function index(req, res){
    Post.find({}).populate('user').exec(function(err, photos){
        if (err){
            console.log(err)
        }
        res.render('post', { title: "Posts", photos} )
    })
}

