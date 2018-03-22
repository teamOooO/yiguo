// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

<<<<<<< HEAD
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './styles/app.scss'

Vue.use(MintUI)
=======
<<<<<<< HEAD
>>>>>>> sj-201803015-homepage
=======
>>>>>>> 468ecea89d899c3aebe1e832214be486f1e5f251
>>>>>>> d370ffac235c1ba06db6e36e30045c9169865e14

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
