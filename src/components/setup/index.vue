<template>
  <section>
    <h1>Setup</h1>
    <gap g="60" />
    <h3>Install using npm</h3>
    <div class="terminal">
      <p>npm instll asw-sparkline-chart</p>
    </div>
    <gap />
    <p><small>import in your main.js/app.js (for globel import)</small></p>
    <div class="terminal">
      <p>import Vue from 'vue'</p>
      <p>import AswSparklineChart from 'asw-sparkline-chart'</p>
      <p>Vue.use(AswSparklineChart)</p>
    </div>
    <gap />
    <p><small> now use them in your vue component </small></p>
    <div class="vue-comp">
      <code
        ><b>&#60;</b>asw-sparkline-line :data="[11, 31, 22, 44, 12]"<b
          >/></b
        ></code
      >
    </div>
    <gap/>
    <p>To import directly in your component</p>
    <div class="vue-comp">
      <code>
        <b>import </b>
        <span>AswSparklineBar</span>
        <b> from </b>
        <span>'asw-sparkline-chart/component/bar'</span>
      </code>
      <code>
        <b>import </b>
        <span>AswSparklineColumn</span>
        <b> from </b>
        <span>'asw-sparkline-chart/component/column'</span>
      </code>
      <code>
        <b>import </b>
        <span>AswSparklineLine</span>
        <b> from </b>
        <span>'asw-sparkline-chart/component/line'</span>
      </code>
      <code>
        <b>import </b>
        <span>AswSparklinePie</span>
        <b> from </b>
        <span>'asw-sparkline-chart/component/pie'</span>
      </code>
    </div>
  </section>
</template>

<script>
export default {
  name: 'setup'
}
</script>

<style lang="scss" scoped>
.terminal {
  background: #3e3e3e;
  font-size: 14px;
  padding: 5px 15px;
  margin: 10px 0px;
  border-radius: 4px;
  letter-spacing: 2px;
  p {
    color: #ffffff;
    line-height: 30px;
  }
}
.vue-comp {
  code {
    display: block;
    border-radius: 4px;
    padding: 5px 15px;
    margin: 10px 0px;
    background: #e4e4d9;
    color: #ff6b00;
    b {
      color: #4040ff;
    }
  }
}
</style>
