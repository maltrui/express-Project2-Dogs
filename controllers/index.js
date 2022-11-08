const User = require('../models/user')
const Post = require('../models/post')
const Photo = require('../models/photo')

const fetch = require('node-fetch');
const rootUrl = 'https://random.dog/woof.json'

module.exports = {
    create,
}

function create(req, res){
    req.body.user = req.user._id
    console.log(req.body)
    Photo.create(req.body, function(err, createdPhoto){
        if(err){
            console.log(err)
        }
        console.log(createdPhoto)
        res.redirect('/post')
    })
}
