// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { useUsuarioStore } from '@/store/usuario'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import PersonaView from '@/views/persona/PersonaView.vue'
import NuevaPersonaView from '@/views/persona/NuevaPersonaView.vue'

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginView },
    { path: '/dashboard', component: DashboardView, meta: { requiresAuth: true } },
    { 
        path: '/admin/persona', 
        component: PersonaView,
        name:'ListaPersonas',
        meta: { requiresAuth: true },
        children: [
            {
              path: 'formulario', // importante: SIN slash inicial
              name:'NuevaPersona',
              component: NuevaPersonaView,
              meta: { requiresAuth: true }
            }
          ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Protección de rutas
router.beforeEach((to, from, next) => {
    const auth = useUsuarioStore()
    if (to.meta.requiresAuth && !auth.user) {
        next('/login')
    } else {
        next()
    }
})

export default router
