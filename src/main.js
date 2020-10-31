import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/main.scss'
import AswSparkline from './asw-sparline-chart'
import routeLink from './components/router'
import gap from './components/gap.vue'
import document from './components/document.vue'
Vue.component('gap', gap)
Vue.component('document', document)
Vue.use(routeLink)
Vue.use(AswSparkline)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
