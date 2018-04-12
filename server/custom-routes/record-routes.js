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
            Records.find({ userId: req.params.UserId, CLASSIFICATION_INTER: null }).limit(250)
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
