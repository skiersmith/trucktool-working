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
            Records.find({ CENSUS_MAILING_ADDRESS_STATE: "SC"}).limit(300)
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
    getRecordsByCalled: {
        path: '/records/called/:UserId',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by null'
            Records.find({ userId: req.params.UserId, Called: false }).limit(300)
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getRecordsBySplit: {
        path: '/records/split',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by dot'
            Records.find({ userId: null }).limit(1000)
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
            Records.deleteMany({ userId: null })
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
            Records.find({ userId: req.params.UserId, CLASSIFICATION_INTER: null, timezone: "Mountain" }).limit(200)
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
            Records.find({ userId: req.params.UserId, CLASSIFICATION_INTER: null, timezone: "Eastern" }).limit(200)
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
            Records.find({ userId: req.params.UserId, CLASSIFICATION_INTER: null, timezone: "Pacific" }).limit(200)
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
            Records.find({ userId: req.params.UserId, CLASSIFICATION_INTER: null, timezone: "Central" }).limit(200)
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
            Records.find({ userId: req.params.UserId, CLASSIFICATION_INTER: null, timezone: "Canada" }).limit(200)
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
            Records.find({ userId: req.params.UserId, INTRASTATE_NONHAZMAT: null, timezone: "Mountain" }).limit(200)
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
            Records.find({ userId: req.params.UserId, INTRASTATE_NONHAZMAT: null, timezone: "Eastern" }).limit(200)
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
            Records.find({ userId: req.params.UserId, INTRASTATE_NONHAZMAT: null, timezone: "Pacific" }).limit(200)
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
            Records.find({ userId: req.params.UserId, INTRASTATE_NONHAZMAT: null, timezone: "Central" }).limit(200)
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
            Records.find({ userId: req.params.UserId, INTRASTATE_NONHAZMAT: null, timezone: "Canada" }).limit(200)
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getRecordsByUserId: {
        path: '/records/user/:UserId',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by UserId'
            Records.find({ userId: req.params.UserId})
                .then(records => {
                    res.send(handleResponse(action, records))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },

    updateRecordsByDot: {
        path: '/records/dot/:Dot',
        reqType: 'put',
        method(req, res, next) {
            let action = 'update record'
            // Transactions.updateMany({ Dot: req.params.Dot, status: "green"}, req.params)
            // Records.update
            Records.findOneAndUpdate(
                { Dot: req.params.Dot},
                { $set: { noSale: true } },
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
