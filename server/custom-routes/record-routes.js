let Records = require('../models/record')


module.exports = {


    getRecordsByDot: {
        path: '/records/dot/:DOT',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by dot'
            Records.find({ Dot: req.params.DOT })
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getRecordsByNullTz: {
        path: '/records/nully',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by null'
            Records.find({ timezone: null }).limit(300)
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getRecordsByStateTime: {
        path: '/records/sc/1',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by null'
            Records.find({ CENSUS_MAILING_ADDRESS_STATE: "WY"}).limit(300)
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getRecordsByTzTime: {
        path: '/records/ca/1',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by null'
            Records.find({ timezone: "Canada" }).limit(300)
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    deleteRecordsByTzTime: {
        path: '/records/az/1',
        reqType: 'delete',
        method(req, res, next) {
            let action = 'Get records by null'
            Records.deleteMany({ CENSUS_CELL_PHONE_NUMBER: "OK" })
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getRecordsByCalled: {
        path: '/records/called/:UserId',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by null'
            Records.find({ userId: req.params.UserId, Called: false, CENSUS_MAILING_ADDRESS_STATE: {$in: ["NM","AZ","CO"] } }).limit(500)
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getRecordsBySplit: {
        path: '/records/split/get',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by dot'
            Records.find({ userId: req.params.UserId, Called: false, CENSUS_MAILING_ADDRESS_STATE: "NM"}).limit(1)
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
   deleteRecordsBySplit: {
        path: '/records/split/delete',
        reqType: 'delete',
        method(req, res, next) {
            let action = 'Get records by dot'
            Records.deleteMany({Called: false , Created: { $gte: ["2016-11-15T00:00:00-06:00" ] }}).limit(500)
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    // ,{ qty: { $gt: 25 } }
    getIntraByUserId: {
        path: '/intra/user/:UserId',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by UserId'
            Records.find({ userId: req.params.UserId, CLASSIFICATION_INTER: null }).limit(200)
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getIntraMountainByUserId: {
        path: '/intra/mountain/user/:UserId',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by UserId'
            Records.find({ userId: req.params.UserId, CLASSIFICATION_INTER: null, timezone: "Mountain",  Status: { $ne: "red" } }).limit(200)
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getIntraEasternByUserId: {
        path: '/intra/eastern/user/:UserId',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by UserId'
            Records.find({ userId: req.params.UserId, CLASSIFICATION_INTER: null, timezone: "Eastern",  Status: { $ne: "red" } }).limit(200)
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getIntraPacificByUserId: {
        path: '/intra/pacific/user/:UserId',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by UserId'
            Records.find({ userId: req.params.UserId, CLASSIFICATION_INTER: null, timezone: "Pacific",  Status: { $ne: "red" } }).limit(200)
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getIntraCentralByUserId: {
        path: '/intra/central/user/:UserId',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by UserId'
            Records.find({ userId: req.params.UserId, CLASSIFICATION_INTER: null, timezone: "Central",  Status: { $ne: "red" } }).limit(200)
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getIntraCanadaByUserId: {
        path: '/intra/canada/user/:UserId',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by UserId'
            Records.find({ userId: req.params.UserId, CLASSIFICATION_INTER: null, timezone: "Canada",  Status: { $ne: "red" } }).limit(200)
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getInterByUserId: {
        path: '/inter/user/:UserId',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by UserId'
            Records.find({ userId: req.params.UserId, INTRASTATE_NONHAZMAT: null }).limit(250)
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getInterMountainByUserId: {
        path: '/inter/mountain/user/:UserId',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by UserId'
            Records.find({ userId: req.params.UserId, INTRASTATE_NONHAZMAT: null, timezone: "Mountain",  Status: { $ne: "red" } }).limit(200)
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getInterEasternByUserId: {
        path: '/inter/eastern/user/:UserId',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by UserId'
            Records.find({ userId: req.params.UserId, INTRASTATE_NONHAZMAT: null, timezone: "Eastern",  Status: { $ne: "red" } }).limit(200)
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getInterPacificByUserId: {
        path: '/inter/pacific/user/:UserId',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by UserId'
            Records.find({ userId: req.params.UserId, INTRASTATE_NONHAZMAT: null, timezone: "Pacific",  Status: { $ne: "red" } }).limit(200)
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getInterCentralByUserId: {
        path: '/inter/central/user/:UserId',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by UserId'
            Records.find({ userId: req.params.UserId, INTRASTATE_NONHAZMAT: null, timezone: "Central",  Status: { $ne: "red" } }).limit(200)
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getInterCanadaByUserId: {
        path: '/inter/canada/user/:UserId',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by UserId'
            Records.find({ userId: req.params.UserId, INTRASTATE_NONHAZMAT: null, timezone: "Canada",  Status: { $ne: "red" }  }).limit(200)
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getRecordsByUserId: {
        path: '/records/all/all',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by UserId'
            Records.find({ Called: false, })
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },

    updateRecordsByDot: {
        path: '/records/dot3/:dot',
        reqType: 'put',
        method(req, res, next) {
            let action = 'update record'
            // Transactions.updateMany({ Dot: req.params.Dot, status: "green"}, req.params)
            // Records.update
            
            Records.update(
                // { Dot: req.params.Dot},
                // { $set: { noSale: true } },
                { Dot: req.params.dot},
                { $set: { userId: "5b92b37effb3c052eee45b98" } }
            ).then(records => {
                res.send(handleResponse(action, records))
            }).catch(error => {
                return next(handleResponse(action, null, error))
            })
        }
    }
}


function handleResponse(action, data, error) {
    var response = {
        action: action,
        data: data
    }
    if (error) {
        response.error = error
    }
    return response
}
