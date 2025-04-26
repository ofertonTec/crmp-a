<script setup>
import { ref, onMounted } from "vue";

const emit = defineEmits(["loginSuccess"]);

const usuario = ref("");
const tipo = ref("");

function handleLogin() {
  if (usuario.value && tipo.value) {
    emit("loginSuccess", { usuario: usuario.value, tipo: tipo.value });
  }
}

// Configurar particles.js cuando el componente esté montado
//En la terminal:npm install particles.js
onMounted(() => {
  // Cargar el script de particles.js si no lo has instalado
  if (typeof particlesJS === "undefined") {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      particlesJS("digital-particles", {
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#00f3ff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#00f3ff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
        },
        retina_detect: true,
      });
    };
    document.body.appendChild(script);
  }
});
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Efecto de partículas en el fondo -->
    <!-- <div id="digital-particles"></div>-->
    <!-- Contenedor principal con flexbox -->
    <div class="flex flex-col flex-1 justify-center items-center">
      <!-- Logo arriba -->
      <div class="logo">
        <img class="" id="" src="/public/logo.png" alt="Logo" />
      </div>

      <!-- Formulario en el centro -->
      <form
        @submit.prevent="handleLogin"
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
            v-model="usuario"
            placeholder="Usuario"
            class="py-3 px-2 w-full border border-cyan-400 rounded-md bg-gray-900 hover:shadow-cyan-400 shadow-md"
            required
          />

          <select
            v-model="tipo"
            class="py-3 px-2 w-full border border-cyan-400 rounded-md bg-gray-900 hover:shadow-cyan-400 shadow-md"
            required
          >
            <option disabled value="">Selecciona un rol</option>
            <option value="admin">Admin</option>
            <option value="supervisor">Supervisor</option>
            <option value="cliente">Cliente</option>
          </select>

          <button type="submit" class="btn red">Ingresar al sistema</button>
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
