// src/store/auth.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUsuarioStore = defineStore('auth', () => {
    const user = ref(JSON.parse(localStorage.getItem('user')) || null)

    function login(usuario, tipo) {
        user.value = { usuario, tipo }
        localStorage.setItem('user', JSON.stringify(user.value))
    }

    function logout() {
        user.value = null
        localStorage.removeItem('user')
    }

    return { user, login, logout }
})
