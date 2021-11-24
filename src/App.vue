<template>
  <div class="container">
    <div id="nav" class="nav">
      <router-link
        v-for="link in links"
        :to=link.path
        :key="link.name"
        class="nav__link"
      >
        {{ link.name }}
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      links: [
        { path: '/', name: 'Home' },
        { path: '/history', name: 'History' },
        { path: '/history/added', name: 'Added' },
        { path: '/history/removed', name: 'Removed' }
      ]
    }
  },

  methods: {
    ...mapActions(['fetchItems'])
  },

  created () {
    this.fetchItems()
  }
}
</script>

<style lang="scss">

#app {
  font-family: Gotham SSm A, Gotham SSm B, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

ul {
  padding: 0;
}

li {
  list-style: none;
}

.nav__link {
  padding: 1em;
}

.container {
  max-width: 850px;
  min-height: calc(100vh - 16px);
  padding: 0 15px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 #dcdcdc;
}

.row {
  display: flex;
}

.container {
  .row {
    margin: 0 -7.5px;
  }
}

.column {
  width: 50%;
  padding: 0 7.5px;
  box-sizing: border-box;
}

.input {
  font-family: Gotham SSm A, Gotham SSm B, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 15px;
  border-radius: 10px;
  border: none;
  outline: none;
  box-shadow: 0 0 10px 0 #dcdcdc;
}

</style>
