<template>
  <div class="item">
    <template v-if="viewOnly">
      <div class="item__title">
        {{ item.name }}
      </div>
      <div class="item__text">
        <div class="item__section">
          <div class="figure">
            <img
              src="@/assets/icons/time.svg"
              class="figure__icon"
              alt=""/>
          </div>
          <span>{{ item.time }}</span>
        </div>
      </div>
      <div class="item__text">
        <div class="item__section">
          <div class="figure">
            <img
              src="@/assets/icons/event.svg"
              class="figure__icon"
              alt=""/>
          </div>
          <span>{{ item.event }}</span>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="item__title">
        {{ item.name }}
      </div>
      <div class="item__text">
        <div class="item__section">
          <div class="figure">
            <img
              src="@/assets/icons/phone.svg"
              class="figure__icon"
              alt=""/>
          </div>
          <span>{{ item.phone }}</span>
        </div>
      </div>
      <div class="item__text">
        <div class="item__section">
          <div class="figure">
            <img
              src="@/assets/icons/email.svg"
              class="figure__icon"
              alt=""/>
          </div>
          <span>{{ item.email }}</span>
        </div>
      </div>
      <button
        v-if="changeable"
        class="item__button"
        @click="$emit('onReplace', item)"
      >
        <img
          :src="require(`@/assets/icons/${getNameIcon}.svg`)"
          class="item__button-icon"
          :class="getNameIcon"
          alt=""/>
      </button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: ['item', 'type', 'changeable', 'viewOnly'],
  computed: {
    getNameIcon () {
      return this.type === 'all'
        ? 'favorite'
        : 'remove'
    }
  }
}
</script>

<style src="./component.scss" lang="scss" scoped />
