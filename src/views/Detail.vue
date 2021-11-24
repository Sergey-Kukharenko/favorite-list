<template>
  <h1>{{ id }}</h1>

  <div class="row">
    <div class="column">
      <List
        :items="getList"
        type="all"
        :viewOnly="true"
      />
    </div>
  </div>

</template>

<script>
import List from '../components/List'

export default {
  name: 'Detail',
  components: { List },
  props: ['id'],
  computed: {
    getList () {
      const id = this.id
      return this.$store.getters[id]
    }
  }
}
</script>

<style scoped>

</style>
