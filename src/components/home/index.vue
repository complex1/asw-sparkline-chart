<template>
  <section>
    <h1 class="tc">WELCOME TO ASW SPARKLINE CHART</h1>
    <p>
      A sparkline is a very small line chart, typically drawn without
      axes or coordinates. It presents the general shape of the variation
      (typically over time) in some measurement, such as temperature or
      stock market price, in a simple and highly condensed way. Sparklines
      are small enough to be embedded in text, or several sparklines may be
      grouped together as elements of a small multiple. Whereas the typical
      chart is designed to show as much data as possible, and is set off
      from the flow of text, sparklines are intended to be succinct,
      memorable, and located where they are discussed.
    </p>
    <div class="demo-cont">
        <asw-sparkline-column
          class="spl"
          height="40%"
          width="30%"
          fill="#caffbf"
          min-bar-spacing="0"
          bar-width="100"
          :data="barData"/>
        <div class="spl" style="width: 50%; height: 40%">
          <asw-sparkline-line
            height="45%"
            width="100%"
            :data="line1"
            color="#9bf6ff"
            point-size="0"
          />
          <gap g="10" u="%" />
          <asw-sparkline-line
            height="45%"
            width="100%"
            :data="line2"
            color="#9bf6ff"
            point-size="0"
          />
        </div>
        <asw-sparkline-line
          class="spl"
          height="40%"
          width="50%"
          :data="area"
          color="#bdb2ff"
          :fill="true"
        />
        <asw-sparkline-pie
          class="spl"
          height="40%"
          width="30%"
          :data="pie"/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeDoc',
  data () {
    return {
      barData: [22, 55, 11, 24, 19, 32, 46, 19],
      line1: [33, 48, 33, 59, 56, 6, 49, 9, 61, 50, 65, 4, 82, 52, 50, 26, 80, 7, 81, 11, 86, 68, 9, 61, 8, 47, 18, 85, 82, 95, 28, 61, 93, 66, 50, 68, 11, 61, 42, 18, 22, 12, 93, 32, 75, 40, 74, 92, 66, 38, 94, 79, 83, 34, 1, 86, 86, 45, 32, 59, 26, 9, 51, 17, 87, 16, 72, 79, 4, 20, 77, 47, 97, 89, 29, 1, 69, 89, 38, 57, 91, 56, 98, 39, 34, 92, 72, 90, 44, 68, 42, 35, 51, 57, 35, 25, 49, 14, 13, 84],
      line2: [33, 48, 33, 59, 56, 6, 49, 9, 61, 50, 65, 4, 82, 52, 50, 26, 80, 7, 81, 11, 86, 68, 9, 61, 8, 47, 18, 85, 82, 95, 28, 61, 93, 66, 50, 68, 11, 61, 42, 18, 22, 12, 93, 32, 75, 40, 74, 92, 66, 38, 94, 79, 83, 34, 1, 86, 86, 45, 32, 59, 26, 9, 51, 17, 87, 16, 72, 79, 4, 20, 77, 47, 97, 89, 29, 1, 69, 89, 38, 57, 91, 56, 98, 39, 34, 92, 72, 90, 44, 68, 42, 35, 51, 57, 35, 25, 49, 14, 13, 84],
      area: [74, 88, 1, 59, 57, 42, 34, 28, 57, 87],
      pie: [9, 46, 11, 84, 56]
    }
  },
  methods: {
    updateAll () {
      this.barData.shift()
      this.line1.shift()
      this.line2.shift()
      this.area.shift()

      this.barData.push(Math.round(Math.random() * 100))
      this.line1.push(Math.round(Math.random() * 100))
      this.line2.push(Math.round(Math.random() * 100))
      this.area.push(Math.round(Math.random() * 100))
    }
  },
  mounted () {
    setInterval(this.updateAll, 1000)
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 42px;
}
p {
  margin: 20px 0px;
}
.demo-cont {
  border: 1px solid #777777;
  height: 300px;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: #123c59;
  .spl {
    margin: 10px;
  }
}
</style>
