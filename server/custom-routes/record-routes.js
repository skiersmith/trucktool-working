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
    getRecordsByUserId: {
        path: '/records/user/:UserId',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get records by UserId'
            Records.find({ userId: req.params.UserId })
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
