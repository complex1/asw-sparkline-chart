<template>
  <section>
    <h4 class="tc">Charts</h4>
    <ul>
      <li>
        <a to="/" @click="$emit('goto', '/')">Home</a>
      </li>
      <li>
        <a to="/setup" @click="$emit('goto', '/setup')">Setup</a>
      </li>
      <li>
        <a to="/data" @click="$emit('goto', 'data')">Data</a>
      </li>
      <li>
        <a to="/bar" @click="$emit('goto', '/bar')">Bar</a>
      </li>
      <li>
        <a to="/line" @click="$emit('goto', '/line')">Line</a>
      </li>
      <li>
        <a to="/pie" @click="$emit('goto', '/pie')">Pie</a>
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
