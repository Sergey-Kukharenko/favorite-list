<template>
  <div class="home">
    <h1>Home</h1>

    <input
      type="text"
      class="input"
      v-model="search"
    >

    <div class="row">
      <div class="column">
        <h2>All</h2>
        <List
          :items="filteredItems"
          type="all"
          :changeable="true"
        />
      </div>
      <div class="column">
        <h2>Favorites</h2>
        <List
          :items="favorites"
          type="favorites"
          :changeable="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { filterDeeply } from '../utils'
import List from '../components/List'

export default {
  name: 'Home',
  data () {
    return {
      search: ''
    }
  },
  components: { List },
  computed: {
    ...mapGetters(['items', 'favorites']),

    filteredItems () {
      return filterDeeply(this.items, this.search)
    }
  },
  methods: {
    ...mapActions(['fetchItems'])
  }
}
</script>
