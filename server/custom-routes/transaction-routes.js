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
  },
  updateTransactionsByDot: {
    path: '/transactions/dot/:Dot',
    reqType: 'put',
    method(req, res, next) {
      let action = 'update transactions'
      // Transactions.updateMany({ Dot: req.params.Dot, status: "green"}, req.params)
      Transactions.updateMany(
        { Dot: req.params.Dot, Status: "green"},
        {$set: {Status: req.params.Status}},
     )

      // Transactions.update({ Dot : req.params.Dot, Status : "green"}, )
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