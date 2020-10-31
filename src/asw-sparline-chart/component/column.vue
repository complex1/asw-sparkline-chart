<template>
  <div :style="getBoxSize" class="asw-sparkline-chart">
    <svg :height="chartHeight" :width="chartWidth">
      <rect
        class="asw-sparkline-bar"
        v-for="(i,index) in  barArray"
        :key="i.id"
        :fill="i.fill"
        :height="i.height"
        :width="i.width"
        :x="i.x"
        :y="i.y"
        @mousemove="showTooltip($event, i.data, index)"
        @mouseleave="hideTooltip"
        @click="click($event, index)"
      />
    </svg>
    <div class="asw-sparkline-tooltip" />
  </div>
</template>

<script>
import common from '../mixins/common'
export default {
  mixins: [common],
  props: {
    barWidth: {
      type: [String, Number],
      default: 10
    },
    minBarSpacing: {
      type: [String, Number],
      default: 10
    },
    maxBarSpacing: {
      type: [String, Number],
      default: 15
    },
    fill: {
      type: String,
      default: '#444444'
    }
  },
  computed: {
    barArray () {
      const barArray = []
      this.setHasLabel()

      const hasLabel = this.hasLabel

      const valData = !hasLabel ? this.data : this.data.map(e => e.value)

      const h = this.chartHeight
      const w = this.chartWidth

      const maxData = Math.max(...valData)
      const dataLength = this.data.length
      const minBarSpacing = this.minBarSpacing

      let barWidth = this.barWidth
      let spacing = (w - (dataLength * barWidth)) / (dataLength + 1)

      while (spacing < minBarSpacing && barWidth > 0) {
        barWidth--
        spacing = (w - (dataLength * barWidth)) / (dataLength + 1)
      }

      if (spacing > this.maxBarSpacing) {
        spacing = this.maxBarSpacing
      }

      for (let i = 0; i < dataLength; i++) {
        const bar = {}
        bar.width = barWidth
        bar.height = (valData[i] * h) / maxData
        bar.x = spacing * (i + 1) + barWidth * i
        bar.y = h - bar.height
        bar.fill = this.fill
        bar.data = valData[i]
        if (hasLabel) {
          bar.label = this.data[i].label || ''
        }
        barArray.push(bar)
      }

      return barArray
    }
  }
}
</script>

<style lang="scss" scoped>
.asw-sparkline-chart {
  .asw-sparkline-bar:hover {
    opacity: 0.8;
  }
}
</style>
