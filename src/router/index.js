import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component:Home,
      children:[
        {
          path: 'about',
          name: 'About',
          component: () => import ('../views/About')
        }
      ]
    },
 
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import ('../views/Sign-in')
  },
  
  

  
  
  {
    path: '/Details-page',
    name: 'Details-page',
    component: () => import ('../views/Details-page')
  },
  {
    path: '/Shared',
    name: 'Shared',
    component: () => import ('../views/Shared'),
   
  
  },
 
  

 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
