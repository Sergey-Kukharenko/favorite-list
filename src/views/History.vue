<template>
  <div class="history">
    <h1>History</h1>
    <div class="row">
      <div class="column">
        <h2>Added</h2>
        <List
          :items="added"
          type="all"
          :viewOnly="true"
        />
      </div>
      <div class="column">
        <h2>Removed</h2>
        <List
          :items="removed"
          type="all"
          :viewOnly="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import List from '../components/List'

export default {
  name: 'History',
  components: { List },
  computed: {
    ...mapGetters(['added', 'removed'])
  }
}
</script>
