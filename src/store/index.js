import { createStore } from 'vuex'
import shared from './modules/shared'
import users from './modules/users'

export default createStore({
  modules: {
    shared, users
  }
})
