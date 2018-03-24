<<<<<<< HEAD
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Index from '@/components/layout/Index'
import Home from '@/components/layout/Home'
import Classify from '@/components/layout/Classify'
import Community from '@/components/layout/Community'
import ShoppingCar from '@/components/layout/ShoppingCar'
import Mine from '@/components/layout/Mine'
import Detail from '@/components/layout/detail'

import Area from '@/components/home/Area'
import Product from '@/components/list/Product'

import Search from '@/components/classify/Search'
import SideNav from '@/components/classify/SideNav'
import GoodContent from '@/components/classify/GoodContent'

import Signin from '@/components/signin/signin'
import Signup from '@/components/signin/signup'
import Signout from '@/components/signin/signout'

import CommunityContent from '@/components/community/CommunityContent'
import KnowLedge from '@/components/community/KnowLedge'
import LivingHome from '@/components/community/LivingHome'
import Lovetoeat from '@/components/community/Lovetoeat'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Index,
      redirect: '/home',
      children: [{
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: '/classify',
          redirect:'/classify/0'
        },
        {
          path: 'classify/:page',
          name: 'classify',
          component: Classify,
          props: true
        },
        {
          path: 'shoppingcar',
          name: 'shoppingcar',
          component: ShoppingCar
        },
        {
          path: 'mine',
          name: 'mine',
          component: Mine
        },
      ]
    },
    {
      path: '/community',
      name: '',
      component: Community,
      children: [
        {
          path: '',
          name: 'community',
          component: CommunityContent
        },
        {
          path: 'knowledge',
          name: 'knowledge',
          component: KnowLedge
        },
        {
          path: 'livinghome',
          name: 'livinghome',
          component: LivingHome
        },
        {
          path: 'lovetoeat',
          name: 'lovetoeat',
          component: Lovetoeat
        }
      ]
    },
    {
      path: '/product/:index',
      name: 'product',
      component: Product
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
      props:true
    },
    {
      path: 'area',
      name: 'area',
      component: Area
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/signout',
      name: 'signout',
      component: Signout
    }

  ]
})
=======
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Index from '@/components/layout/Index'
import Home from '@/components/layout/Home'
import Classify from '@/components/layout/Classify'
import Community from '@/components/layout/Community'
import ShoppingCar from '@/components/layout/ShoppingCar'
import Mine from '@/components/layout/Mine'
import Detail from '@/components/layout/detail'

import Area from '@/components/home/Area'
import Product from '@/components/list/Product'

import Search from '@/components/classify/Search'
import SideNav from '@/components/classify/SideNav'
import GoodContent from '@/components/classify/GoodContent'

import CommunityContent from '@/components/community/CommunityContent'
import KnowLedge from '@/components/community/KnowLedge'
import LivingHome from '@/components/community/LivingHome'
import Lovetoeat from '@/components/community/Lovetoeat'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Index,
      redirect: '/home',
      children: [{
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: '/classify',
          redirect:'/classify/0'
        },
        {
          path: 'classify/:page',
          name: 'classify',
          component: Classify,
          props: true
        },
        {
          path: 'shoppingcar',
          name: 'shoppingcar',
          component: ShoppingCar
        },
        {
          path: 'mine',
          name: 'mine',
          component: Mine
        },
      ]
    },
    {
      path: '/community',
      name: '',
      component: Community,
      children: [
        {
          path: '',
          name: 'community',
          component: CommunityContent
        },
        {
          path: 'knowledge',
          name: 'knowledge',
          component: KnowLedge
        },
        {
          path: 'livinghome',
          name: 'livinghome',
          component: LivingHome
        },
        {
          path: 'lovetoeat',
          name: 'lovetoeat',
          component: Lovetoeat
        }
      ]
    },
    {
      path: '/product/:class',
      name: 'product',
      component: Product
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: 'area',
      name: 'area',
      component: Area
    },

  ]
})
>>>>>>> sj-201803015-homepage
