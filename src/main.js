<<<<<<< HEAD
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> sj-201803015-homepage
=======
>>>>>>> 468ecea89d899c3aebe1e832214be486f1e5f251
>>>>>>> d370ffac235c1ba06db6e36e30045c9169865e14
=======
>>>>>>> 09b1e152d4c251f49e835f0368ca8ec7d6e5f618

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

       //关于购物车的请求
      axios({
        url:'/api/users/findCart',
        method:'POST',
        data:{
          username:result.data.data.username
        }
      }).then((result) => {
        result = result.data.data;
        result.forEach((item) => {
            this.$store.dispatch('addToCart',{opt:item,id:item.CommodityId,canadd:true});
            this.$store.dispatch('cartIsEmpty')
        })
      })

    })
   
  }
})
=======
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './styles/app.scss'

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
  }
})
>>>>>>> sj-201803015-homepage
