<template>
  <ul class="list">
    <Item
      v-for="item in items"
      :key="item.id"
      :item="item"
      :type="type"
      :changeable="changeable"
      :viewOnly="viewOnly"
      class="item"
      @onReplace="replace"
    />
  </ul>
</template>

<script>
import { mapActions } from 'vuex'
import Item from './item/component'

export default {
  name: 'List',
  components: { Item },
  props: ['items', 'type', 'changeable', 'viewOnly'],
  data () {
    return {
      list: {
        all: {
          arrFrom: 'items',
          arrTo: 'favorites',
          arrHistory: 'added',
          eventName: 'add'
        },

        favorites: {
          arrFrom: 'favorites',
          arrTo: 'items',
          arrHistory: 'removed',
          eventName: 'remove'
        }
      }
    }
  },
  computed: {
    getTypeList () {
      return this.list[this.type]
    }
  },
  methods: {
    ...mapActions(['replaceItemFromTo']),
    replace (item) {
      const typeList = this.getTypeList
      return this.replaceItemFromTo({ item, typeList })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
