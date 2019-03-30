<template>
  <div id="app">
    <app-header class="fixed-top"></app-header>
    <div class="container">
        <router-view></router-view>
    </div>
      <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'App',

  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>

<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 59px;
  height: 100%;
  /* background-color: #f7f7f7; */
  /* background-color: #f1f3f6; */
}

.container {
  max-width: 1500px;
  padding: 0;
}
</style>
