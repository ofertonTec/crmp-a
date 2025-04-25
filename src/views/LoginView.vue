<script setup>
import { reactive } from 'vue';
import {useRouter} from 'vue-router'
const router=useRouter()
import { useUsuarioStore } from '@/stores/usuario';
const usuarioStore=useUsuarioStore()

const handlerSubmit=(data)=>{
    usuarioStore.nombre=data.nombre
		usuarioStore.password=data.password
    router.push('/dashboard')
}

</script>
<template>
  <main class="mx-auto md:w-1/5 p-5  ">
    <img src="/public/logo.png" alt="">
    <FormKit type="form"
        submit-label="Ingresar al sistema"
        incomplete-message="Todo los campos son obligatorios"
        @submit="handlerSubmit"
    >
      <FormKit
        type="text"
        label="Usuario"
        placeholder="Ingrese su usuario"
        validation="required"
        :validation-messages="{ required: 'Ingrese su usuario' }"
        name="nombre"
      />
      <FormKit
        type="password"
        label="Contraseña"
        validation="required"
        :validation-messages="{required:'Ingrese su contraseña'}"
        name="password"
      />
    </FormKit>
  </main>
</template>
<style>
.formkit-input{
  width: 100%;
}
</style>
