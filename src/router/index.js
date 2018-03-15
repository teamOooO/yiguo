import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/layout/Home'
import Classify from '@/components/layout/Classify'
import Community from '@/components/layout/Community'
import ShoppingCar from '@/components/layout/ShoppingCar'
import Mine from '@/components/layout/Mine'



import Search from '@/components/classify/Search'
import SideNav from '@/components/classify/SideNav'
import GoodContent from '@/components/classify/GoodContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    },
    {
      path: '/shoppingcar',
      name: 'shoppingcar',
      component: ShoppingCar
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
    
  ]
})
