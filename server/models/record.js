var models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
    Dot: { type: String, required: true },
    DOCKET: { type: String },
    ENTITY_TYPE: { type: String },
    CENSUS_DBA: { type: String },
    EMAIL_ADDRESS: { type: String },
    COMPANY_REP_1: { type: String},
    COMPANY_REP_2: { type: String},
    MCS_150_DATE: { type: String},
    SAFER_OPERATING_STATUS: { type: String},
    CENSUS_LEGAL_NAME: { type: String},
    FMCSA_BUSINESS_TELEPHONE_NUMBER: { type: String},
    CENSUS_CELL_PHONE_NUMBER: { type: String},
    CENSUS_OFFICE_TELEPHONE_NUMBER: { type: String},
    CENSUS_MAILING_ADDRESS_STATE: { type: String},
    CENSUS_MAILING_ADDRESS_ZIP_CODE: { type: String},
    Called: { type: Boolean},
    UserId: { type: ObjectId, ref: models.user}
});

module.exports = mongoose.model(models.record.name, schema);