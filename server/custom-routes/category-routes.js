// var Users = require('../models/user')
// var Dashboard = require( '../models/category')
// var Products = require('../models/product')
// var Lists = require('../models/list')
// var Notes = require('../models/note')
// var Categorys = require('../models/category')

module.exports = {

    // getListsByCategoryId: {
    //     path: '/categorys/:categoryId/lists',
    //     reqType: 'get',
    //     method(req, res, next) {
    //         let action = 'Find Lists By CategoryId'
           
    //         Lists.find({ categoryId: req.params.categoryId })
    //             .then(lists => {
    //                 res.send(handleResponse(action, lists))
    //             }).catch(error => {
    //                 console.log(error)
    //                 return next(handleResponse(action, null, error))
    //             })
    //     }
    // },
    // getListByCategoryId: {
    //     path: '/categorys/:categoryId/lists/:listId',
    //     reqType: 'get',
    //     method(req, res, next) {
    //         let action = 'Find List By CategoryId'
           
    //         Lists.findone({ categoryId: req.params.categoryId })
    //             .then(lists => {
    //                 res.send(handleResponse(action, lists))
    //             }).catch(error => {
    //                 console.log(error)
    //                 return next(handleResponse(action, null, error))
    //             })
    //     }
    // },
    // getProductsByListId: {
    //     path: '/lists/:listId/products',
    //     reqType: 'get',
    //     method(req, res, next) {
    //         let action = 'Find Products By ListId'
    //         Products.find({ listId: req.params.listId })
    //             .then(products => {
    //                 res.send(handleResponse(action, products))
    //             }).catch(error => {
    //                 return next(handleResponse(action, null, error))
    //             })
    //     }
    // },
    // getNotesByProductId: {
    //     path: '/products/:productId/notes',
    //     reqType: 'get',
    //     method(req, res, next) {
    //         let action = 'Find Notes By ProductId'
    //         Notes.find({ productId: req.params.productId })
    //             .then(notes => {
    //                 res.send(handleResponse(action, notes))
    //             }).catch(error => {
    //                 return next(handleResponse(action, null, error))
    //             })
    //     }
    // },
    // createList: {
    //     path: '/categorys/:categoryId/lists',
    //     reqType: 'post',
    //     method(req, res, next) {
    //         let action = 'create Notes By ProductId'
    //         Categorys.findById( req.params.categoryId )
    //             .then(category => {
    //                 req.body.categoryId = category._id
    //                 Lists.create(req.body)
    //                 .then(list => {
    //                     res.send(handleResponse(action, list))
    //                 })

    //             }).catch(error => {
    //                 return next(handleResponse(action, null, error))
    //             })
    //     }
    // }
    
    // getProductsByListId: {
    //     path: '/dashboard/:categoryId/lists/:listId/products',
    //     reqType: 'get',
    //     method(req, res, next) {
    //         let action = 'Find Products By ListId'
    //         Products.find({ listId: req.params.listId })
    //             .then(products => {
    //                 res.send(handleResponse(action, products))
    //             }).catch(error => {
    //                 return next(handleResponse(action, null, error))
    //             })
    //     }
    // },

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