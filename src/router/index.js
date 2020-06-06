import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shared from '../views/shared/Shared'  


Vue.use(VueRouter)

  const routes = [
    {
        path:'/Home',
        redirect:'/'
    },
    {
      path: '/',
      name: 'Shared',
      component: Shared,
      children:[
        {
          path: '',
          name: 'Home',
          component:Home,
        },
        
        {
          path: 'Details-page',
          name: 'Details-page',
          component: () => import ('../views/Details-page')
        },
      ]
    
    },
  
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import ('../views/Sign-in')
  },

  {
    path:'*',
    name:'Err',
    component: () => import ('../views/err/Err')
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
