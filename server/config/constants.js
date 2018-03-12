const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {
  record: {
    name: 'Record',
    endpoint: 'records',
    useCustomRoutes: true
  },
  transaction: {
    name: 'Transaction',
    endpoint: 'transactions',
    useCustomRoutes: true
  },
  user: {
    name: 'User',
    endpoint: 'users',
    preventDefaultApi: true,
    useCustomRoutes: true
  },
  
  note: {
    name: 'Note',
    endpoint: 'notes'
    // useCustomRoutes: true
  },
}


module.exports = {
  actions,
  models
}