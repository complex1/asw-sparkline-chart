<template>
  <section>
    <h2>ASW Sparkline Line Chart</h2>
    <gap g="20"/>
    <h4>ASW Sparkline Line</h4>
    <gap/>
    <document>
      <asw-sparkline-line/>
    </document>
    <gap g='30' />
    <div class="demo">
      <div class="graph">
        <asw-sparkline-line
          :lineWidth="lineWidth"
          :fill="fill"
          :color="color"
          :lineOpacity="lineOpacity"
          :fillOpacity="fillOpacity"
          :pointSize="pointSize"
        />
      </div>
      <div class="config">
        <h3>Config</h3>
        <div>
          <label>lineWidth</label>
          <input type="number" v-model="lineWidth">
        </div>
        <div>
          <label>fill</label>
          <input type="checkbox" v-model="fill">
        </div>
        <div>
          <label>color</label>
          <input type="color" v-model="color">
        </div>
        <div>
          <label>lineOpacity</label>
          <input type="number" v-model="lineOpacity">
        </div>
        <div>
          <label>fillOpacity</label>
          <input type="number" v-model="fillOpacity">
        </div>
        <div>
          <label>pointSize</label>
          <input type="number" v-model="pointSize">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LineDoc',
  data () {
    return {
      lineWidth: 2,
      fill: true,
      color: '#47afff',
      lineOpacity: 1,
      fillOpacity: 0.2,
      pointSize: 3
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
    input[type="checkbox"] {
      width: 20px;
    }
  }
}
</style>
