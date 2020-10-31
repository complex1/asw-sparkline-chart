<template>
  <div :style="{paddingTop: `${g}${u}` }"></div>
</template>

<script>
export default {
  props: {
    g: {
      type: [Number, String],
      default: 10
    },
    u: {
      type: [Number, String],
      default: 'px'
    }
  }
}
</script>

<style>

</style>
