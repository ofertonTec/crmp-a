<script setup>
import RouterLink from "@/components/UI/RouterLink.vue"
import { FormKit } from "@formkit/vue"
import { useUsuarioStore } from "@/stores/usuario"
import Header from "@/components/Header.vue"
const usuarioStore = useUsuarioStore()
</script>

<template>
  <Header/>
  <div>
    <!--<RouterLink
      to="home"
      class="bg-indigo-600 text-white p-1 uppercase font-extralight rounded-sm hover:bg-indigo-700 cursor-pointer transition-colors"
    >
      Regresar
    </RouterLink>-->
  </div>
  <RouterView/>
</template>
