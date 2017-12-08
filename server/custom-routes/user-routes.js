//NEED TO MAKE CUSTOM ROUTES FOR LISTS/TASKS/COMMENTS


let Dashboard = require('../models/category')

module.exports = {
  userBoards: {
    path: '/userboards',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Dashboard'
      Dashboard.find({creatorId: req.session.uid})
        .then(dashboard => {
          res.send(handleResponse(action, dashboard))
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