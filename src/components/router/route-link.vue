<template>
  <a :href="to" @click="goTo">
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
      // window.history.replaceState({}, this.name || this.to, this.to)
    }
  }
}
</script>

<style>

</style>
