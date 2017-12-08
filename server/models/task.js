var models = require('../config/constants').models
let mongoose = require('mongoose')
var Comments = require('./comment')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    resalePrice: { type: Number },
    tags: { type: String },
    sku: { type: String },
    created: { type: Number, default: Date.now() },
    listId: { type: ObjectId, ref: models.list, required: true },
});


module.exports = mongoose.model(models.task.name, schema);