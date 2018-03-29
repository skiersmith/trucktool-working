//NEED TO MAKE CUSTOM ROUTES FOR LISTS/TASKS/COMMENTS
var axios = require('axios')
var timeStuff = axios.create({
  baseURL: 'http://worldclockapi.com/api/json/utc/',
  timeout: 5000
})
// let Dashboard = require('../models/category')
let User = require('../models/user')


module.exports = {
  getTime: {
    path: '/get-time',
    reqType: 'get',
    method(req, res, next) {
      let action = 'get'
      timeStuff.get("now").then(timeStuffResponse => {
          res.send(handleResponse(action, timeStuffResponse.data))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
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