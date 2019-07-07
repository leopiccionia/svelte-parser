<template>
  <div id="app">
    <SvelteParser/>
  </div>
</template>

<script>
  import SvelteParser from './components/Parser.vue'

  export default {
    name: 'App',
    components: {
      SvelteParser
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
