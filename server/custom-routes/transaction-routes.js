let Transactions = require('../models/transaction')


module.exports = {


  getTransactionsByDot: {
    path: '/transactions/record/:dot',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Get transaction by dot'
      Transactions.find({ Dot: req.params.dot })
        .then(transactions => {
          res.send(handleResponse(action, transactions))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  getTransactionsByUserId: {
    path: '/transactions/users/:UserId',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Get transaction by uid'
      Transactions.find({ UserId: req.params.UserId })
        .then(transactions => {
          res.send(handleResponse(action, transactions))
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