<template>
  <div :style="getBoxSize" class="asw-sparkline-chart">
    <svg :height="chartHeight" :width="chartWidth">
      <path
        v-for="(arc, index) in arcArray"
        :key="arc.id"
        class="asw-sparkline-arc"
        :fill="arc.fill"
        :d='arc.path'
        @mousemove="showTooltip($event, arc.data, index)"
        @mouseleave="hideTooltip"
        @click="click($event, index)"
      />
    </svg>
    <div class="asw-sparkline-tooltip" />
  </div>
</template>

<script>
import common from '../mixins/common'
import { describeArc } from '../utills/arc'
export default {
  mixins: [common],
  computed: {
    arcArray () {
      const arcArray = []
      this.setHasLabel()

      const hasLabel = this.hasLabel

      const valData = !hasLabel ? this.data : this.data.map(e => e.value)

      const cy = this.chartHeight / 2
      const cx = this.chartWidth / 2
      const r = (cx > cy ? cy : cx) - 5
      const total = valData.reduce((sum, i) => sum + i, 0)

      let startAngle = 0

      for (let i = 0; i < valData.length; i++) {
        const arc = {}
        const angle = (valData[i] / total) * 360
        arc.path = describeArc(cx, cy, r, startAngle, startAngle + angle)
        startAngle += angle
        arc.fill = `rgb(${Math.random() * 255 + 1},${Math.random() * 255 + 1},${Math.random() * 255 + 1}, 0.7)`
        arc.data = valData[i]
        if (hasLabel) {
          arc.label = this.data[i].label || ''
        }
        arcArray.push(arc)
      }
      return arcArray
    }
  }
}
</script>

<style lang="scss" scoped>
.asw-sparkline-chart {
  .asw-sparkline-arc:hover {
    opacity: 0.8;
  }
}
</style>
