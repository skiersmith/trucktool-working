var Users = require('../models/user')
var Dashboard = require( '../models/category')
var Products = require('../models/product')
var Lists = require('../models/list')
var Notes = require('../models/note')




module.exports = {



    getListsByCategoryId: {
        path: '/categorys/:categoryId/lists',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Find Lists By BoardId'
            Lists.find({ categoryId: req.params.categoryId })
                .then(lists => {
                    res.send(handleResponse(action, lists))
                }).catch(error => {
                    console.log(error)
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getProductsByListId: {
        path: '/dashboard/:categoryId/lists/:listId/products',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Find Products By ListId'
            Products.find({ listId: req.params.listId })
                .then(products => {
                    res.send(handleResponse(action, products))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getNotesByProductId: {
        path: '/dashboard/:categoryId/lists/:listId/products/:productId/notes',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Find Notes By ProductId'
            Notes.find({ productId: req.params.productId })
                .then(notes => {
                    res.send(handleResponse(action, notes))
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