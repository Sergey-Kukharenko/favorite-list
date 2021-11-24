import { createItem, replaceItem } from '../../utils'

export default {
  state: {
    items: [],
    favorites: [],
    added: [],
    removed: []
  },
  mutations: {
    fetchItems (state, payload) {
      state.items = payload
    },

    replaceItemFromTo (state, { item, typeList }) {
      const { arrFrom, arrTo, arrHistory, eventName } = typeList

      replaceItem(state, item, arrFrom, arrTo)
      createItem(state, item, arrHistory, eventName)
    }
  },
  actions: {
    async fetchItems ({ commit }) {
      commit('clearError')
      commit('setLoading', true)

      // for testing
      /*
      const items = [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
              lat: '-37.3159',
              lng: '81.1496'
            }
          },
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
          }
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
              lat: '-43.9509',
              lng: '-34.4618'
            }
          },
          phone: '010-692-6593 x09125',
          website: 'anastasia.net',
          company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
          }
        }
      ]
      */

      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const responseData = await response.json()

      console.log(responseData)

      try {
        commit('fetchItems', responseData)
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },

    replaceItemFromTo ({ commit }, payload) {
      commit('replaceItemFromTo', payload)
    }
  },
  getters: {
    items (state) {
      return state.items
    },

    favorites (state) {
      return state.favorites
    },

    added (state) {
      return state.added
    },

    removed (state) {
      return state.removed
    }
  }
}
