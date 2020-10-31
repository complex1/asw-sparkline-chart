<template>
  <section>
    <h4 class="tc">Charts</h4>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/setup">Setup</router-link>
      </li>
      <li>
        <router-link to="/data">Data</router-link>
      </li>
      <li>
        <router-link to="/bar">Bar</router-link>
      </li>
      <li>
        <router-link to="/line">Line</router-link>
      </li>
      <li>
        <router-link to="/pie">Pie</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>

<style lang="scss" scoped>
section {
  width: 150px;
  min-height: calc(100vh - 60px);
  background: #90e0efdd;
  padding: 20px 0px;
  h4 {
    margin-bottom: 10px;
  }
  li {
    padding: 3px 15px;
    margin: 2px 0px;
    a {
      text-decoration: none;
      display: block;
      font-weight: bold;
      color: #555555;
    }
  }
  li:hover {
    background:  #90e0ef;
  }
}
</style>
