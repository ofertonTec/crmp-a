<script setup>
import RouterLink from "@/components/UI/RouterLink.vue";
import { FormKit } from "@formkit/vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />
  <main class="mx-auto md:w-3/12 mt-10 p-5">
    <h1 class="font-extrabold uppercase text-gray-500">Nuevo Registro</h1>
    
    <div class="mt-3">
      <FormKit type="form" submit-label="Registrar Persona">
        <FormKit 
          type="text"
          label="Nombre"
          
        />
      </FormKit>
    </div>
  </main>
</template>
