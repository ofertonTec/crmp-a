<script setup>
import { useRouter } from 'vue-router';
const router=useRouter()
  function handleSubmit(values) {
    router.push({name:"dasboard"})
}

</script>
<template>
  <div class=" flex  justify-center m-3">
    <div class="p-5 rounded-2xl w-full max-w-2xl border border-cyan-400 shadow-[0_0_30px_rgba(0,255,255,0.3)]"
    >
      <h1
        class="text-3xl font-bold text-cyan-400 text-center mb-8 flex items-center justify-center gap-2"
      >
        <i class="fas fa-user-astronaut"></i> Nuevo Usuario
      </h1>

      <FormKit type="form" :actions="false" @submit="handleSubmit" incomplete-message="Revisar los campos solicitados y completarlos">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="relative">
            <i class="fas fa-user absolute left-4 top-1/3 text-cyan-800"></i>
            <FormKit
              type="text"
              name="nombre"
              label="Nombre(s)"
              validation="required"
              :validation-messages="{required:'El nombre es obligatorio'}"
              input-class="pl-10 w-full p-0.5 "
              label-class="text-white "
            />
          </div>

          <FormKit
            type="text"
            label="Apellido"
            name="apellido"
            validation="required"
            :validation-messages="{required:'El apellido es obligatorio'}"
            input-class="pl-10 w-full p-0.5 "
            label-class="text-white"
          />

          <FormKit
            type="email"
            label="E-mail"
            name="email"
            validation="required|email"
            :validation-messages="{required:'El correo es obligatorio' , email:'Ingresar un correo válido'}"
            input-class="pl-10 w-full p-0.5 "
            label-class="text-white"
          />

          <FormKit
            type="text"
            label="Usuario"
            name="usuario"
            validation="required"
            :validation-messages="{required:'El usuario es obligatorio'}"
            input-class="pl-10 w-full p-0.5 "
            label-class="text-white"
          />

          <FormKit
            type="password"
            label="Contraseña"
            name="password"
            validation="required"
            :validation-messages="{required:'La contraseña es obligatorio'}"
            input-class="pl-10 w-full p-0.5 "
            label-class="text-white"
          />

          <FormKit
            type="select"
            label="Perfil"
            name="perfil"
            :options="['Administrador', 'Usuario Regular', 'Invitado']"
            validation="required"
            :validation-messages="{required:'El tipo de perfil es obligatorio'}"
            input-class="pl-10 w-full p-0.5 "
            label-class="text-white"
          />
        </div>

        <button
          type="submit"
          class="group relative bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium px-10 py-3 rounded-full transition-transform duration-300 mx-auto block overflow-hidden mt-8 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]"
        >
          <span
            class="absolute top-0 left-0 w-full h-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.2),transparent)] transform scale-150 translate-x-[-100%] group-hover:animate-shine z-0"
          ></span>
          <span class="relative z-10">Guardar Usuario</span>
        </button>
      </FormKit>
    </div>
  </div>
  <div class="text-gray-50">

  </div>
</template>

<style></style>
