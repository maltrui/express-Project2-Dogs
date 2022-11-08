const User = require('../models/user')
const Post = require('../models/post')
const Photo = require('../models/photo')

module.exports = {
    index
}

function index(req, res){
    Photo.find({},function(err, photos){
        if (err){
            console.log(err)
        }
        console.log(photos)
        res.render('post', { title: "Posts", photos} )
    })
}