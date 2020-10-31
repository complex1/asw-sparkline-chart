import './scss/tooltip.scss'
import AswSparlineBar from './component/bar.vue'
import AswSparlineColumn from './component/column.vue'
import AswSparlinePie from './component/pie.vue'
import AswSparlineLine from './component/line.vue'
import AswSparlineDoughnut from './component/doughnut.vue'
import AswSparlineScatter from './component/scatter.vue'

export default {
  install (Vue) {
    Vue.component('asw-sparkline-bar', AswSparlineBar)
    Vue.component('asw-sparkline-column', AswSparlineColumn)
    Vue.component('asw-sparkline-line', AswSparlineLine)
    Vue.component('asw-sparkline-pie', AswSparlinePie)
    Vue.component('asw-sparkline-doughnut', AswSparlineDoughnut)
    Vue.component('asw-sparkline-scatter', AswSparlineScatter)
  }
}
