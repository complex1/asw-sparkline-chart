import router from './router'
export default {
  install (Vue) {
    Vue.component('router-link', () => import('./route-link.vue'))
    Vue.mixin(router)
  }
}
