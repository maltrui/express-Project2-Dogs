const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photoSchema = new Schema(
    {
        url: {type: String, required: true},
        likes: {type: Schema.Types.ObjectId, ref: 'User'}
    }
)

module.exports = mongoose.model('Photo', photoSchema)