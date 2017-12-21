//NEED TO MAKE CUSTOM ROUTES FOR LISTS/TASKS/COMMENTS


let Dashboard = require('../models/category')
let Product = require('../models/product')


module.exports = {
  userCategory: {
    path: '/userboards',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Find User Dashboard'
      Dashboard.find({ creatorId: req.session.uid })
        .then(dashboard => {
          res.send(handleResponse(action, dashboard))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  // updateProduct: {
  //   path: '/products/:productId/',
  //   reqType: 'put',
  //   method(req, res, next) {
  //     let action = 'Update Product'

  //     Product.find({ productId: req.params.productId })
  //       .then(products => {
  //         res.send(handleResponse(action, products))
  //       }).catch(error => {
  //         return next(handleResponse(action, null, error))
  //       })
  //   }
  // },
  getProductsByTag: {
    path: '/products/tag/:tag/',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Find Products By Tag'
      Product.find({ tag: req.params.tag })
        .then(products => {
          res.send(handleResponse(action, products))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  getAll: {
    path: '/All',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Find All Products'
      Products.find({ products })
        .then(products => {
          res.send(handleResponse(action, products))
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