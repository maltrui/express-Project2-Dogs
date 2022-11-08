const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photoSchema = new Schema(
    {
        content: {type: String, required: true},
        rating:{type: Number, require: true},
        photo: {type: String, required: true},
        user: {type: Schema.Types.ObjectId, ref: 'User'}
    },{
        timestamps: true
    }
)

module.exports = mongoose.model('Photo', photoSchema)