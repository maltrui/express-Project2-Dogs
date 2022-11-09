const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        commentUser: {type: Schema.Types.ObjectId, ref: 'User'},
        commentContent: {type: String, required: true},
        commentRating: {type: Number, require: true}
    },{
        timestamps: true
    }
)

const postSchema = new Schema(
    {
        dog: {type: Schema.Types.ObjectId, ref: 'Photo'},
        userComments: [commentSchema],
        likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    } ,{
        timestamps: true
    }
)

module.exports = mongoose.model('Post', postSchema)