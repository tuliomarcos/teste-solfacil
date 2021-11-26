<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './js/components/pages/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  background: #E5E5E5;
}
</style>
