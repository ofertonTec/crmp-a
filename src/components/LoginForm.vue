<script setup>
import { ref, onMounted, reactive } from "vue";

const emit = defineEmits(["loginSuccess"]);

const usuario=reactive({
  usuario:'',
  tipo:''
})

function validarLogin() {
  if (Object.values(usuario).includes('')) {
   alert('Todo los campos son obligatorios')
   return
  }else{
    emit("loginSuccess", { usuario: usuario.usuario, tipo: usuario.tipo });
  }
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex flex-col flex-1 justify-center items-center">
      <div class="logo">
        <img class="" id="" src="/public/logo.png" alt="Logo" />
      </div>
      <form
        @submit.prevent="validarLogin"
        class="login-form w-2/5 shadow-2xl border-cyan-300 shadow-cyan-600 bg-gray-950 py-1"
      >
        <h2
          class="uppercase text-center my-4 text-cyan-300 text-2xl text-shadow-md text-shadow-cyan-200"
        >
          ACCESO AL SISTEMA
        </h2>
        <div class="flex flex-col items-center gap-5 m-4">
          <i class="fas fa-user input-icon"></i>
          <input
            v-model="usuario.usuario"
            placeholder="Usuario"
            class="py-3 px-2 w-full border border-cyan-400 rounded-md bg-gray-900 hover:shadow-cyan-400 shadow-md"
          />

          <select
            v-model="usuario.tipo"
            class="py-3 px-2 w-full border border-cyan-400 rounded-md bg-gray-900 hover:shadow-cyan-400 shadow-md"
          >
            <option disabled value="">Selecciona un rol</option>
            <option value="admin">Admin</option>
            <option value="supervisor">Supervisor</option>
            <option value="cliente">Cliente</option>
          </select>

          <input type="submit" class="btn red" value="Ingresar al sistema">
        </div>
      </form>
    </div>

    <footer class="text-center bg-gray-900">
      <p class=" px-2 py-5">
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

.btn.red {
  background: linear-gradient(45deg, #00f3ff, #0066ff);
  border: none;
  padding: 1rem 2rem;
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  color: white;
  border-radius: 10px;
  width: 100%;
}

.btn.red:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 243, 255, 0.4);
}

.btn.red::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    left: -50%;
  }
  100% {
    left: 150%;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Estilos responsive */
@media (max-width: 600px) {
  .btn.red {
    padding: 1rem;
    font-size: 1rem;
  }
  .login-form {
    width: 90%;
  }
}
</style>
