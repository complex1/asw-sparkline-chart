<template>
  <div :style="getBoxSize" class="asw-sparkline-chart">
    <svg :height="chartHeight" :width="chartWidth">
      <path
        :d="getPath"
        :stroke="color"
        :fill="fill ? color : 'transparent'"
        :stroke-width="lineWidth"
        :fill-opacity="fillOpacity"
        :line-opacity="lineOpacity"
      />
      <circle
        v-for="(i,index) in getPointsArray"
        :key="i.id"
        :cx="i.x"
        :cy="i.y"
        :r="pointSize"
        :fill="color"
        :fill-opacity="lineOpacity"
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
import { genPath } from '../utills/path'
export default {
  mixins: [common],
  props: {
    labelType: {
      type: String,
      default: 'string'
    },
    includeZero: {
      type: Boolean,
      default: true
    },
    lineWidth: {
      type: [Number, String],
      default: 2
    },
    fill: {
      type: Boolean,
      default: false
    },
    color: {
      type: [Number, String],
      default: '#777777'
    },
    lineOpacity: {
      type: [Number, String],
      default: 1
    },
    fillOpacity: {
      type: [Number, String],
      default: 0.5
    },
    pointSize: {
      type: [Number, String],
      default: 3
    },
    curve: {
      type: [Number, String, Boolean],
      default: 10
    }
  },
  computed: {
    yAxisData () {
      return !this.hasLabel ? this.data : this.data.map(e => e.value)
    },
    xAxisData () {
      return this.hasLabel && (this.labelType === 'number')
        ? this.data.map(e => e.label)
        : ((arr) => { const t = []; for (let i = 0; i < arr.length; i++) { t.push(i) } return t })(this.data)
    },
    xAxisRatio () {
      const maxX = Math.max(...this.xAxisData) * 1.05
      const minX = Math.min(...this.xAxisData) * 1.05
      return this.chartWidth / (maxX - minX)
    },
    yAxisRatio () {
      const maxY = Math.max(...this.yAxisData) * 1.05
      let minY = Math.min(...this.xAxisData) * 1.05
      minY = minY < 0 ? minY : this.includeZero ? 0 : minY
      return this.chartHeight / (maxY - minY)
    },
    getPath () {
      let path = ''
      this.setHasLabel()

      path += this.firstPath(this.xAxisData[0], this.yAxisData[0])

      path += this.getPointsArray.length > 2 ? genPath(this.getPointsArray, parseInt(this.curve)) : ''

      if (this.fill) {
        path += this.lastPath()
      }
      return path
    },
    getPointsArray () {
      const pointArray = []
      this.setHasLabel()

      for (let i = 0; i < this.data.length; i++) {
        const point = {}
        point.x = this.xAxisData[i] * this.xAxisRatio
        point.y = this.chartHeight - this.yAxisData[i] * this.yAxisRatio
        point.data = this.yAxisData[i]
        if (this.hasLabel) {
          point.label = this.data[i].label || ''
        }
        pointArray.push(point)
      }
      return pointArray
    }
  },
  methods: {
    firstPath (x, y) {
      if (this.fill) {
        return `M 0 ${this.chartHeight} L ${x * this.xAxisRatio} ${this.chartHeight - ((y) * this.yAxisRatio)}`
      }
      return `M ${x * this.xAxisRatio} ${this.chartHeight - ((y) * this.yAxisRatio)} `
    },
    lastPath () {
      return `L ${this.chartWidth} ${this.chartHeight}`
    }
  }
}
</script>

<style>

</style>
