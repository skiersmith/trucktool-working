var Users = require('../models/user')
var Boards = require( '../models/board')
var Products = require('../models/product')
var Lists = require('../models/list')
var Notes = require('../models/note')




module.exports = {





    // getBoardByBoardId: {
    //     path: '/boards/:boardId',
    //     reqType: 'get',
    //     method(req, res, next){
    //       let action = 'Find Lists By BoardId'
    //       Lists.find({boardId: req.params.boardId})
    //         .then(lists => {
    //           res.send(handleResponse(action, lists))
    //         }).catch(error => {
    //           return next(handleResponse(action, null, error))
    //         })
    //     }
    //   },
    getListsByBoardId: {
        path: '/boards/:boardId/lists',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Find Lists By BoardId'
            Lists.find({ boardId: req.params.boardId })
                .then(lists => {
                    res.send(handleResponse(action, lists))
                }).catch(error => {
                    console.log(error)
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getProductsByListId: {
        path: '/boards/:boardId/lists/:listId/products',
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
        path: '/boards/:boardId/lists/:listId/products/:productId/notes',
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