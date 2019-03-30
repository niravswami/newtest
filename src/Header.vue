<template>
  <header id="header" >
    <nav class="navbar navbar-expand-lg navbar-light " @mouseover="show = true" @mouseout="show=false">

    <app-logo class="navbar-brand"></app-logo>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" >
     <div class="nav-item aaa">
        <search-box ></search-box>
      </div>
    <div class="navbar-nav ml-auto">

       <div class="nav-item">
        <local-search ></local-search>
      </div>

      <div class="nav-item">
        <app-services ></app-services>
      </div>

       <div class="nav-item">
        <app-login ></app-login>
      </div>

      <div class="nav-item">
        <pin-address  ></pin-address>
      </div>
    </div>

  </div>
</nav>
      <div @mouseover="show = true" @mouseout="show=false">
        <lower-head v-if="show" ></lower-head>
      </div>


  </header>
</template>

<script>
import Searchbox from './components/HeaderComp/Searchbox'
import LocalSearch from './components/HeaderComp/LocalSearch'
import Services from './components/HeaderComp/Services'
import Login from './components/HeaderComp/Login'
import PinAddress from './components/HeaderComp/PinAddress'
import LowerHead from './components/HeaderComp/LowerHead'
import Logo from './components/HeaderComp/Logo'

export default {

  components: {
    'search-box': Searchbox,
    'local-search': LocalSearch,
    'app-services': Services,
    'app-login': Login,
    'PinAddress': PinAddress,
    'lower-head': LowerHead,
    'app-logo': Logo
  },
  data() {
    return {
      show: false
    }
  }

}

</script>

<style scoped>
.navbar {
  background-color: #fff;
}
 .aaa{
   width: 100%;
   min-width: 300px;
 }

#header {
  border-bottom: 1px solid #ef6c3c;
}
.border {
  margin: 0;
  padding: 0;
}

</style>
