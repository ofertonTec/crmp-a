import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/RegistroPersonaView.vue'
import Login from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login ,
    },
    {
      path:'/dashboard',
      name:'dashboard',
      component:()=>import('../views/DashboardView.vue')
     
    },
    {
      path:'/nueva-persona',
      name:'nueva-persona',
      component:()=>import('../views/RegistroPersonaView.vue')
    }
  ],
})

export default router
