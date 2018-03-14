let Records = require('../models/record')


module.exports = {


  getRecordsByRecordId: {
    path: '/records/dot/:Dot',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Get records by dot'
      Records.find({ Dot: req.params.Dot })
        .then(records => {
          res.send(handleResponse(action, records))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  getRecordsByUserId: {
    path: '/records/user/:userId',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Get records by userid'
      Records.find({ userId: req.params.userId })
        .then(records => {
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