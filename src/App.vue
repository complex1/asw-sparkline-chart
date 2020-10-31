<template>
  <main id="app">
    <navbar/>
    <div class="flex">
      <sidebar @goto="goTo"/>
      <div class="cont">
        <component class="doc-section" :is="compName" />
      </div>
    </div>
  </main>
</template>

<script>

export default {
  name: 'App',
  components: {
    navbar: () => import('./components/navbar'),
    sidebar: () => import('./components/sidebar'),
    HomeDoc: () => import('./components/home'),
    SetupDoc: () => import('./components/setup'),
    DataDoc: () => import('./components/data'),
    BarDoc: () => import('./components/bar'),
    LineDoc: () => import('./components/line'),
    PieDoc: () => import('./components/pie')
  },
  data () {
    return {
      data: [],
      path: null
    }
  },
  methods: {
    goTo (path) {
      this.path = path
    }
  },
  computed: {
    compName () {
      switch (this.path) {
        case '/': return 'home-doc'
        case '/setup': return 'setup-doc'
        case '/data': return 'data-doc'
        case '/line': return 'line-doc'
        case '/bar': return 'bar-doc'
        case '/pie': return 'pie-doc'
        default: return 'home-doc'
      }
    }
  }
}
</script>

<style lang="scss">
.cont {
  width: calc(100vw - 150px);
  height: calc(100vh - 100px);
  overflow: auto;
}
.doc-section {
  max-width: 800px;
  margin: 0px auto;
  padding: 20px;
  padding-bottom: 40px;
}
</style>
