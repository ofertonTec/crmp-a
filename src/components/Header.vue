<script setup>
import { useUsuarioStore } from "@/store/usuario";
import { useRouter } from "vue-router";

const auth = useUsuarioStore();
const router = useRouter();

function logout() {
  auth.logout();
  router.push("/login");
}
</script>
<template>
  <header class="header">
    <div class=" menu flex  flex-wrap justify-between items-center">
     
        <img
          class="w-30"
          src="http://procuradoresasoc.com/wp-content/uploads/2020/11/logo-3.png"
          alt="Logo"
        />
        <h1 class="title-header">PANEL P&A - SISTEMA SEGURIDAD</h1>
      

      <button
        @click="logout"
        class="btn-cerrar-sesion bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded font-bold"
      >
        Cerrar Sesión
      </button>
    </div>
  </header>
</template>
<style scoped>
.header {
  background: rgba(0, 243, 255, 0.1);
  border: 1px solid rgba(0, 243, 255, 0.3);
  backdrop-filter: blur(10px);
  padding: 1rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  color: white;
  z-index: 10;
}
.header:hover {
  background: rgba(0, 243, 255, 0.2);
  box-shadow: 0 0 20px rgba(0, 243, 255, 0.3);
}
.title-header {
  font-family: "Orbitron", sans-serif;
  font-size: 1rem;
  text-align: center;
  background: linear-gradient(90deg, #00f3ff, #ff00ff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px #00f3ff, 0 0 20px #ff00ff;
  letter-spacing: 2px;
  animation: pulse 2s infinite alternate;
}

@keyframes pulse {
  0% {
    text-shadow: 0 0 10px #00f3ff, 0 0 20px #ff00ff;
  }
  100% {
    text-shadow: 0 0 20px #00f3ff, 0 0 30px #ff00ff;
  }
}
@media(max-width:600px){
.menu{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2;
}
}
</style>
