// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './styles/app.scss'

import axios from 'axios'
import WebStorageCache from'web-storage-cache'

const wsCache = new WebStorageCache();

Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  store,
  components: {
    App,
  },
  beforeCreate () {
    axios({
      url: '/api/users/issignin',
      headers:{
        'X-Access-Token': wsCache.get('token')
      }
    })
    .then((result) => {
      // console.log(result)
      this.$store.dispatch('getIssignin',result.data.data.issignin)
      this.$store.dispatch('getUserName',result.data.data.username)
    })
  }
})
