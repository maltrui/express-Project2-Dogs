const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        dog: {type: String, require: true}
        content: {type: String, require: true},
        rating:{type: Number, require: true},
        user: {type: Schema.Types.ObjectId, ref: 'User'},
        name: String,
        avatar: String
    } ,{
        timestamps: true
    }
)

module.exports = mongoose.model('Post', postSchema)