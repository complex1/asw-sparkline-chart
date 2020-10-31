<template>
  <section>
    <h2>ASW Sparkline Bar Chart</h2>
    <gap/>
    <p>There are 2 types of bar graph</p>
    <gap g="20"/>
    <h4>ASW Sparkline Column</h4>
    <gap/>
    <document>
      <asw-sparkline-column/>
    </document>
    <gap g='30' />
    <div class="demo">
      <div class="graph">
        <asw-sparkline-column
          :barWidth="barWidth1"
          :minBarSpacing="minBarSpacing1"
          :maxBarSpacing="maxBarSpacing1"
          :fill="fill1"
        />
      </div>
      <div class="config">
        <h3>Config</h3>
        <div>
          <label>barWidth</label>
          <input type="number" v-model="barWidth1">
        </div>
        <div>
          <label>minBarSpacing</label>
          <input type="number" v-model="minBarSpacing1">
        </div>
        <div>
          <label>maxBarSpacing</label>
          <input type="number" v-model="maxBarSpacing1">
        </div>
        <div>
          <label>fill</label>
          <input type="color" v-model="fill1">
        </div>
      </div>
    </div>
    <gap g="20"/>
    <h4>ASW Sparkline Bar</h4>
    <gap/>
    <document>
      <asw-sparkline-bar/>
    </document>
    <gap g='30' />
    <div class="demo">
      <div class="graph">
        <asw-sparkline-bar
          :barWidth="barWidth2"
          :minBarSpacing="minBarSpacing2"
          :maxBarSpacing="maxBarSpacing2"
          :fill="fill2"
        />
      </div>
      <div class="config">
        <h3>Config</h3>
        <div>
          <label>barWidth</label>
          <input type="number" v-model="barWidth2">
        </div>
        <div>
          <label>minBarSpacing</label>
          <input type="number" v-model="minBarSpacing2">
        </div>
        <div>
          <label>maxBarSpacing</label>
          <input type="number" v-model="maxBarSpacing2">
        </div>
        <div>
          <label>fill</label>
          <input type="color" v-model="fill2">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BarDoc',
  data () {
    return {
      barWidth1: 10,
      minBarSpacing1: 5,
      maxBarSpacing1: 10,
      fill1: '#6fd8f5',
      barWidth2: 10,
      minBarSpacing2: 5,
      maxBarSpacing2: 10,
      fill2: '#6fd8f5'
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
  height: 200px;
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
    height: 100%;
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
