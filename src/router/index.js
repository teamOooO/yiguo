import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Search from '@/components/classify/Search'
import SideNav from '@/components/classify/SideNav'
import GoodContent from '@/components/classify/GoodContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
    
  ]
})
