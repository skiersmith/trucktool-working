var models = require('../config/constants').models
let mongoose = require('mongoose')
// var Notes = require('./note')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
    Dot: { type: Number, default: 0},
    Notes: { type: String},
    Status: { type: String },
    UserId: { type: ObjectId, ref: models.user },
    Created: { type: Date, default: Date.now },
    Updated: { type: String }
});


module.exports = mongoose.model(models.transaction.name, schema);