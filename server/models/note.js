var models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
    description: { type: String, required: true },
    created: { type: Number, default: Date.now },
    // Relations
    productId: { type: ObjectId, ref: models.product, required: true }
});

module.exports = mongoose.model(models.note.name, schema);