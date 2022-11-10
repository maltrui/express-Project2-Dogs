const User = require('../models/user')
const Post = require('../models/post')

module.exports = {
    index,
}

function index(req, res){
    Post.find({},function(err, photos){
        if (err){
            console.log(err)
        }
        console.log(photos)
        res.render('post', { title: "Posts", photos} )
    })
}

