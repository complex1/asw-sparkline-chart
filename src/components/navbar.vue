<template>
  <nav>
    <h3>ASW Sparkline</h3>
    <a href="https://github.com/complex1/asw-sparkline-chart">
      <img src="../assets/github.svg" height="100%" alt="">
    </a>
  </nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="scss" scoped>
nav {
  background: #90e0ef;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  justify-content: space-between;
  a {
    height: 100%;
  }
  img {
    height: 100%;
    padding: 10px;
    border-radius: 50%;
  }
}
</style>
