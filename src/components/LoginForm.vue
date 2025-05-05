<script setup>
import { ref, onMounted, reactive } from "vue";
import { FormKit } from "@formkit/vue";
import RouterLink from "./UI/RouterLink.vue";

const emit = defineEmits(["loginSuccess"]);

const usuario = reactive({
  usuario: "",
  tipo: "",
});

function validarLogin() {
  emit("loginSuccess", { usuario: usuario.usuario, tipo: usuario.tipo });
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex flex-col flex-1 items-center">
      <div class="logo">
        <img id="" src="/public/logo.png" alt="Logo" />
      </div>
      <div
        class="shadow-2xl border-green-300 shadow-green-600 bg-gray-950"
      >
        <h2
          class="uppercase text-center my-4 text-green-300 text-xl text-shadow-md text-shadow-green-200 mx-3"
        >
          ACCESO AL SISTEMA
        </h2>
        <div class="m-4">
          <FormKit
            type="form"
            :actions="false"
            @submit="validarLogin"
            incomplete-message="Revisar información"
          >
            <FormKit
              type="text"
              name="usuario"
              validation="required"
              :validation-messages="{ required: 'Ingrese su usuario' }"
              placeholder="Ingrese usuario"
              v-model="usuario.usuario"
            >
              <template #prefixIcon>
                <span class="text-green-300 text-2xl pr-2">
                  <i class="fas fa-user"></i>
                </span>
              </template>
            </FormKit>

            <FormKit
              type="select"
              name="tipo"
              validation="required"
              :validation-messages="{
                required: 'Seleccione el tipo de usuario',
              }"
              :options="{
                '': 'Selecione',
                admin: 'Administrador',
                supervisor: 'Supervisor',
                cliente: 'Cliente',
              }"
              v-model="usuario.tipo"
            />
            <RouterLink tipo="submit" otraClase="w-full"
              >Ingresar al sistema
              <i class="fa-solid fa-arrow-up-right-from-square"></i
            ></RouterLink>
          </FormKit>
        </div>
      </div>
    </div>

    <footer class="text-center bg-gray-900">
      <p class="px-2 py-5">
        2025 © Procuradores & Asociados. Sistema de Gestión de Cobranzas.
      </p>
    </footer>
  </div>
</template>

<style scoped>
.logo img {
  max-width: 250px;
  margin-bottom: 1.5rem;
  animation: float 3s ease-in-out infinite;
}

/* Estilos responsive */
@media (max-width: 600px) {
  .btn.red {
    padding: 1rem;
    font-size: 1rem;
  }
  .formulario {
    width: 90%;
  }
}
</style>
