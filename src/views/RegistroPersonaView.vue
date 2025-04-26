<script setup>
import RouterLink from "@/components/UI/RouterLink.vue";
import { FormKit } from "@formkit/vue";
import Header from "@/components/Header.vue";
</script>

<template>
  
  <Header/>
  <main class="cointainer mx-auto md:w-4/5">
    <FormKit 
    type="form"  
    >
      <FormKit
        type="text"
        submit-label="Registrar Persona"
      
        />
    </FormKit>
  </main>
</template>
