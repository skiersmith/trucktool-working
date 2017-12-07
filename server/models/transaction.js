var models = require('../config/constants').models
let mongoose = require('mongoose')
var Comments = require('./comment')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    salePrice: { type: Number },
    // tags: { type: String },
    created: { type: Number, default: Date.now() },
    productId: { type: ObjectId, ref: models.list, required: true },
    userId: { type: ObjectId, ref: models.list, required: true },
});


module.exports = mongoose.model(models.transaction.name, schema);