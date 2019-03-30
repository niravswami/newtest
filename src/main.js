// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store/store'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/style/style.css'



Vue.config.productionTip = false

export const eventBus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mode: 'history',
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
    apiKey: 'AIzaSyB1x87wak-UoiKJKZACT9ag2nau0Kxe3eE',
    authDomain: 'test1-129bf.firebaseapp.com',
    databaseURL: 'https://test1-129bf.firebaseio.com',
    projectId: 'test1-129bf',
    storageBucket: 'gs://test1-129bf.appspot.com',
    messagingSenderId: '159088738788'
    })
    /* firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$store.dispatch('autoSignIn', user)
      }
    }) */
  }
})
