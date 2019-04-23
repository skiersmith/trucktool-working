//NEED TO MAKE CUSTOM ROUTES FOR LISTS/TASKS/COMMENTS
var axios = require('axios')

// let Dashboard = require('../models/category')
let Records = require('../models/record')
let Transactions = require('../models/transaction')


module.exports = {
    updateRecordsByDot: {
        path: '/customroute',
        reqType: 'put',
        method(req, res, next) {
            let action = 'update record'
            // Transactions.updateMany({ Dot: req.params.Dot, status: "green"}, req.params)
            // Records.update
            Records.updateMany(
                { userId: "5b92b37effb3c052eee45b98"},
                { $set: { userId: null } }
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