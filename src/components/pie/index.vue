<template>
  <section>
    <h2>ASW Sparkline Pie & Doughnut  Chart</h2>
    <gap g="20"/>
    <h4>ASW Sparkline Pie</h4>
    <gap/>
    <document>
      <asw-sparkline-pie/>
    </document>
    <gap g='30' />
    <div class="demo">
      <div class="graph">
        <asw-sparkline-pie/>
      </div>
      <div class="config">
        <h3>Config</h3>
        <gap/>
        <p>No config</p>
      </div>
    </div>
    <gap g="20"/>
    <h4>ASW Sparkline Doughnut</h4>
    <gap/>
    <document>
      <asw-sparkline-doughnut/>
    </document>
    <gap g='30' />
    <div class="demo">
      <div class="graph">
        <asw-sparkline-doughnut
          :thickness="thickness"
        />
      </div>
      <div class="config">
        <h3>Config</h3>
        <div>
          <label>barWidth</label>
          <input type="number" v-model="thickness">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PieDoc',
  data () {
    return {
      thickness: 10
    }
  }
}
</script>

<style lang="scss" scoped>
.comp-name {
    font-size: 12px;
    padding: 5px 10px;
    background: #aae4ef;
    color: #dd2727;
    width: fit-content;
    margin: 10px;
    border-radius: 5px;
}
.demo {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #cacaca;
  border-radius: 8px;
  height: 200px;
  .graph {
    width: 60%;
    min-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #cacaca;
  }
  .config {
    width: 40%;
    min-width: 200px;
    overflow: auto;
    font-size: 12px;
    padding: 10px;
    & > div {
      margin: 10px;
    }
    label {
      color: #222222
    }
    input, select {
      width: 100px;
      color: #444444;
      border: 0px solid;
      border-bottom: 1px solid #777777;
      margin-left: 5px;
    }
    input[type="color"] {
      width: 20px;
    }
  }
}
</style>
