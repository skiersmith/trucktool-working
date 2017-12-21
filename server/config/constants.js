const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {
  category: {
    name: 'Category',
    endpoint: 'categorys',
    useCustomRoutes: true
  },
  list: {
    name: 'List',
    endpoint: 'lists'
    // useCustomRoutes: true
  },
  user: {
    name: 'User',
    endpoint: 'users',
    preventDefaultApi: true,
    useCustomRoutes: true
  },
  product: {
    name: 'Product',
    endpoint: 'products'
    // useCustomRoutes: true
  },
  transaction: {
    name: 'Transaction',
    endpoint: 'transactions',
    useCustomRoutes: true
  },
  note: {
    name: 'Note',
    endpoint: 'notes'
    // useCustomRoutes: true
  },
  all: {
    name: 'All',
    endpoint: 'all'
    // useCustomRoutes: true
  }
}


module.exports = {
  actions,
  models
}