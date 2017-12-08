import axios from 'axios'
import vue from 'vue'
import vuex from 'vuex'
import router from '../router'

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  withCredentials: true
})
vue.use(vuex)

var store = new vuex.Store({
  state: {
    boards: [],
    activeBoard: {},
    activeLists: [],
    activeProducts: {},
    activeComments: {},
    error: {},
    user: {}
  },
  mutations: {
    setUser(state, data) {
      state.user = data
      console.log('setUser: ', data)
      console.log("User: ", state.user)
    },
    setBoards(state, data) {
      state.boards = data
    },
    handleError(state, err) {
      state.error = err
    },
    setActiveBoard(state, payload) {
      state.activeBoard = payload
    },
    setActiveLists(state, lists) {
      state.activeLists = lists
    },
    setActiveProducts(state, payload) {
      vue.set(state.activeProducts, payload.listId, payload.product)
    },
    setActiveComments(state, payload) {
      vue.set(state.activeComments, payload.productId, payload.comment)
    }
  },
  actions: {
    //when writing your auth routes (login, logout, register) be sure to use auth instead of api for the posts//

    //--------BOARDS-----------//
    getBoards({ commit, dispatch }) {
      api('userboards')
        .then(res => {
          commit('setBoards', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    getBoard({ commit, dispatch }, payload) {
      api('boards/' + payload.boardId)
        .then(res => {
          commit('setActiveBoard', res.data.data)
          dispatch('getLists', res.data.data._id)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    createBoard({ commit, dispatch }, board) {
      api.post('boards/', board)
        .then(res => {
          dispatch('getBoards')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    removeBoard({ commit, dispatch }, board) {
      api.delete('boards/' + board._id)
        .then(res => {
          dispatch('getBoards')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    //^^^^^^^^^^^^^^BOARDS^^^^^^^^^^^^^^^^^//




    //-------------LISTS-------------------//
    getLists({ commit, dispatch }, id) {
      api('boards/' + id + '/lists')
        .then(res => {
          commit('setActiveLists', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    createList({ commit, dispatch }, payload) {
      api.post('lists/', payload.list)
        .then(res => {
          dispatch('getLists', payload.list.boardId)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    removeList({ commit, dispatch }, payload) {
      api.delete('lists/' + payload.listId)
        .then(res => {
          dispatch('getLists', payload.boardId)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    //^^^^^^^^^^^^^LISTS^^^^^^^^^^^^^^^^^^//



    //-------------TASKS-----------------//
    getProducts({ commit, dispatch }, payload) {
      api('boards/' + payload.boardId + '/lists/' + payload.listId + '/products')
        .then(res => {
          commit('setActiveProducts', { product: res.data.data, listId: payload.listId })
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    // createProduct({ commit, dispatch }, payload) {
    //   // payload.newProduct.listId = payload.listId
    //   api.post('products', payload.newProduct)
    //     .then(res => {
    //       dispatch('getProducts', {listId:payload.listId, boardId:payload.boardId })
    //     })
    //     .catch(err => {
    //       commit('handleError', err)
    //     })
    // },
    createProduct({ commit, dispatch }, payload) {
      api.post('/products', payload.product)
        .then(res => {
          dispatch('getProducts', payload.product)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    moveProductToDifferentList({ commit, dispatch }, payload) {

      api.put('products/' + payload.productId, {
        listId: payload.listId
      })
        .then(res => {
          dispatch('getProducts', payload)
          dispatch('getProducts', { listId: payload.oldListId, boardId: payload.boardId })
          //getProducts?
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    removeProduct({ commit, dispatch }, payload) {
      api.delete('products/' + payload.productId)
        .then(res => {
          dispatch('getProducts', payload)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    //^^^^^^^^^^^^^TASKS^^^^^^^^^^^^^^^^^//



    // 'boards/' + payload.boardId + '/lists/' + payload.listId + '/products/' + payload.productId + 
    //------------COMMENTS--------------//
    getComments({ commit, dispatch }, payload) {
      api('boards/' + payload.boardId + '/lists/' + payload.listId + '/products/' + payload.productId + '/comments')
        .then(res => {

          commit('setActiveComments', { comment: res.data.data, productId: payload.productId })
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    newComment({ commit, dispatch }, payload) {
      api.post('/comments', payload.comment)
        .then(res => {

          dispatch('getComments', payload.comment)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    removeComment({ commit, dispatch }, payload) {
      api.delete('comments/' + payload.commentId)
        .then(res => {
          dispatch('getComments', payload)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    //^^^^^^^^^^^COMMENTS^^^^^^^^^^^^^^//



    //---------LOGIN/REGISTER/LOGOUT-----------//
    userLogin({ commit, dispatch }, login) {
      auth.post('login', login)
        .then(res => {
          commit('setUser', res.data.data)
          router.push({ name: 'Boards' })
        })
        .catch(() => {
          router.push({ name: "Login" })
        })
    },
    userRegister({ commit, dispatch }, register) {
      auth.post('register', register)
        .then(res => {
          commit('setUser', res.data.data)
          router.push({ name: 'Boards' })
        })
        .catch(err => {
          commit('handleError', err)
          router.push({ name: "Login" })
        })
    },
    authenticate({ commit, dispatch }) {
      auth('authenticate')
        .then(res => {
          // if (!res.data.data) {
          //   router.push({ name: "Login" })
          // }
          commit('setUser', res.data.data)
          router.push({ name: 'Boards' })
        })
        .catch(() => {
          router.push({ name: "Login" })
        })
    },
    logout({ commit, dispatch }, user) {
      auth.delete('logout')
        .then(res => {
          console.log(res)
          dispatch('authenticate')
          // router.push({ name: 'Login' })
        })
        .catch(err => {
          console.log(err)
          res.status(401).send({ Error: err })
        })
    },
    //^^^^^^^^^^^^^^USER/REGISTER/LOGOUT^^^^^^^^^^^//

    handleError({ commit, dispatch }, err) {
      commit('handleError', err)
    }
  }
})


export default store
