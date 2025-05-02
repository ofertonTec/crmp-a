<script setup>
import { useUsuarioStore } from "@/store/usuario";
import Header from "@/components/Header.vue";
import { RouterView } from "vue-router";

const { user } = useUsuarioStore();

const adminItems = [
  { text: "Registrar Persona", link: "/admin/persona" },
  { text: "Registrar Usuario", link: "/usuario" },
  { text: "Registrar Conductor", link: "/admin/registrar-conductor" },
  { text: "Editar Conductor", link: "/admin/editar-conductor" },
  { text: "Resumen Financiero", link: "/admin/resumen-financiero" },
  { text: "Ver Cotizaciones", link: "/admin/ver-cotizaciones" },
];

const supervisorItems = [
  { text: "Detalle Vehículo", link: "/admin/detalle-vehiculo" },
  { text: "Ver Pagos", link: "/cliente/revisar-pagos" },
];

const clienteItems = [
  { text: "Solicitar Cotización", link: "/cliente/solicitar-cotizacion" },
  { text: "Revisar Pagos", link: "/cliente/revisar-pagos" },
];
</script>

<template>
  <Header />
  <div class="flex flex-col min-h-screen p-6 z-10 relative">
    <div class="flex-1 mt-8 space-y-8">
      <h2 class="text-2xl font-orbitron text-white">
        Bienvenido, {{ user.usuario.toUpperCase() }}
      </h2>
      <div class="text-cyan-400">Rol: {{ user.tipo.toUpperCase() }}</div>

      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <!-- ADMIN -->
        <template v-if="user.tipo === 'admin'">
          <div v-for="item in adminItems" :key="item.text" class="card">
            <router-link
              :to="item.link"
              class="block p-6 rounded-xl transition"
            >
              {{ item.text }}
            </router-link>
          </div>
        </template>

        <!-- SUPERVISOR -->
        <template v-else-if="user.tipo === 'supervisor'">
          <div v-for="item in supervisorItems" :key="item.text" class="card">
            <router-link
              :to="item.link"
              class="block p-6 rounded-xl transition"
            >
              {{ item.text }}
            </router-link>
          </div>
        </template>

        <!-- CLIENTE -->
        <template v-else-if="user.tipo === 'cliente'">
          <div v-for="item in clienteItems" :key="item.text" class="card">
            <router-link
              :to="item.link"
              class="block p-6 rounded-xl transition"
            >
              {{ item.text }}
            </router-link>
          </div>
        </template>
      </div>
    </div>
  </div>
  <main>
  </main>
</template>

<style scoped>
/* Fondo animado de letras */
.background-text {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.02) 0px,
      rgba(255, 255, 255, 0.02) 1px,
      transparent 1px,
      transparent 4px
    ),
    repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.02) 0px,
      rgba(255, 255, 255, 0.02) 1px,
      transparent 1px,
      transparent 4px
    );
  background-size: 50px 50px;
  animation: moveBackground 30s linear infinite;
  z-index: 0;
  opacity: 0.2;
}

/* Animación movimiento de fondo */
@keyframes moveBackground {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 1000px 1000px;
  }
}

.card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 243, 255, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* Efecto extra en cards */
.card::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(0, 243, 255, 0.2),
    transparent
  );
  animation: rotate 4s linear infinite;
  pointer-events: none;
}

/* Rotación del resplandor */
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.card:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 0 20px rgba(0, 243, 255, 0.4);
}

.container-cards {
  position: relative;
  background: radial-gradient(
    circle at center,
    rgba(0, 243, 255, 0.1),
    rgba(0, 0, 50, 0.8)
  );
  overflow: hidden;
  padding: 2rem;
  border-radius: 1rem;
  animation: float 6s ease-in-out infinite alternate;
}

@keyframes float {
  0% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(-10px) translateX(10px);
  }
  100% {
    transform: translateY(0px) translateX(0px);
  }
}
</style>
