import { getTooltipText } from '../utills/tooltip'
export default {
  props: {
    data: {
      type: [Array, Object],
      default: function () { return [1, 2, 3, 4, 3, 2, 1] }
    },
    height: {
      type: [String, Number],
      default: '100px'
    },
    width: {
      type: [String, Number],
      default: '200px'
    }
  },
  data () {
    return {
      hasLabel: false,
      chartBox: {},
      chartWidth: 0,
      chartHeight: 0,
      tooltipEle: null
    }
  },
  computed: {
    getBoxSize () {
      return {
        height: this.height,
        width: this.width
      }
    }
  },
  methods: {
    getTooltipText,
    setHasLabel () {
      if (this.data.length > 0) {
        if (typeof this.data[0] === 'object') {
          this.hasLabel = true
        } else {
          this.hasLabel = false
        }
      }
    },
    setUp () {
      this.chartBox = this.$el.getBoundingClientRect()
      this.tooltipEle = this.$el.querySelector('.asw-sparkline-tooltip')
      this.chartWidth = this.chartBox.width
      this.chartHeight = this.chartBox.height
      this.setHasLabel()
    },
    showTooltip (e, data, index) {
      const box = e.target.getBoundingClientRect()
      this.tooltipEle.style.display = 'block'
      this.tooltipEle.style.top = box.y + 'px'
      this.tooltipEle.style.left = box.x + 10 + 'px'
      this.tooltipEle.innerText = this.getTooltipText(data, index)
    },
    hideTooltip (e) {
      this.tooltipEle.style.display = 'none'
    },
    click (event, index) {
      this.$emit('click', {
        event,
        index
      })
    }
  },
  mounted () {
    this.setUp()
  }
}
