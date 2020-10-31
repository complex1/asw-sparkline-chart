<template>
  <a :href="to" onclick="return false" @click="goTo">
    <slot></slot>
  </a>
</template>

<script>

export default {
  props: {
    to: {
      type: [String, Number],
      default: '/'
    },
    name: {
      type: [String, Number],
      default: null
    }
  },
  methods: {
    goTo (e) {
      this.$emit('goTo', this.to)
    }
  }
}
</script>

<style>

</style>
