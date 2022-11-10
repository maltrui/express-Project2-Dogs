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
        content: {type: String, required: true},
        rating:{type: Number, require: true},
        photo: {type: String, required: true},
        user: {type: Schema.Types.ObjectId, ref: 'User'},
        userComments: [commentSchema]
    },{
        timestamps: true
    }
)

module.exports = mongoose.model('Post', postSchema)