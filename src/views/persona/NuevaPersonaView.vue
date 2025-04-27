<script setup>
import { FormKit } from "@formkit/vue";
import { reactive, onMounted, ref } from "vue";
import RouterLink from "@/components/UI/RouterLink.vue";
import PersonaService from "@/services/PersonaService";

import { useRouter } from "vue-router";
const router = useRouter();

const persona = reactive({
  nombre: "",
  apellido:"",
  email:'',
  telefono:''
});

const validarRegistroPersona = (data) => {
  PersonaService.agregarPersona(data)
  .then(respuesta=>{
    router.push('/admin/persona')
  })
  .catch(error=>console.log(error))
};
</script>

<template>
  <div class="px-4 mb-4">
    <RouterLink to="ListaPersonas"> Atrás </RouterLink>
  </div>
  <div class="flex justify-center pb-10 px-4">
    <div
      class="w-full max-w-xl bg-gray-100 p-8 rounded-lg shadow-2xl shadow-cyan-200"
    >
      <FormKit
        type="form"
        submit-label="Agregar Persona"
        @submit="validarRegistroPersona"
        :value="persona"
        incomplete-message="No se pudo enviar, revise los mensajes"
        :classes="{
          submit:'bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded mt-4'
        }"
      >
        <FormKit
          type="text"
          label="Nombre"
          placeholder="Ingrese nombre"
          name="nombre"
          validation="required"
          :validation-messages="{
            required: 'El nombre de la persona es obligatorio', 
          }"
          :classes="{
            label:'text-cyan-300'
          }"
        />
        <FormKit
          type="text"
          label="Apellidos"
          placeholder="Ingrese apellidos"
          name="apellido"
          validation="required"
          :validation-messages="{
            required: 'El apellido de la persona es obligatorio',
          }"
        />
        <FormKit
          type="email"
          label="Email"
          placeholder="Ingrese email"
          name="email"
          validation="required|email"
          :validation-messages="{
            required: 'El email de la persona es obligatorio',
            email: 'Coloca un email válido',
          }"
        />
        <FormKit
          type="text"
          label="Teléfono"
          placeholder="Teléfono: xxx-xxx-xxx"
          name="telefono"
          validation="required|*matches:/^[0-9]{9}$/"
          :validation-messages="{ matches: 'El formato no es válido',required:'El telefono es obligatorio' }"
        />
        <!--<FormKit
         type="submit"
         label="Agregar Persona"
          //Agregar en el form  :actions="false"
       />-->
      </FormKit>
    </div>
  </div>
</template>
