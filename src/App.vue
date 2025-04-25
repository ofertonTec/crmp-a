<script setup>
import { reactive } from "vue";
import { RouterLink, RouterView } from "vue-router";
const usuario= reactive({
  nombre:'',
  password:''
})
</script>

<template>
  <header class="bg-gray-700" v-if="usuario.nombre!=''">
    <div class=""> 
      <h1 class="text-2xl text-white py-3 text-center">Administrador de Clientes</h1>
    </div>
  </header>

  <main class="">
    <RouterView/>
  </main>

</template>
