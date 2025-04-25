<template>
  <nav class="bg-blue-600 text-white p-4 relative z-50">
    <div class="flex justify-between items-center">
      <div class="text-xl font-bold">Procuradores & Asociados</div>

      <!-- Botón hamburguesa -->
      <button @click="menuAbierto = !menuAbierto" class="md:hidden">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <!-- Menú desktop -->
      <ul class="hidden md:flex gap-6 items-center">
        <li><a href="/" class="hover:underline">Inicio</a></li>
        <li>
          <RouterLink :to="{name:'nueva-persona'}" class="hover:underline"> Agregar Persona</RouterLink>
        </li>

        <!-- Dropdown -->
        <li class="relative group">
          <button class="">
            {{ userStore.nombre }}
          </button>
          <ul
            class="absolute right-0 bg-white text-black rounded shadow-md mt-2 hidden group-hover:block min-w-[160px]"
          >
            <li>
              <a href="/perfil" class="block px-4 py-2 hover:bg-gray-100"
                >Perfil</a
              >
            </li>
            <li>
              <a href="/configuracion" class="block px-4 py-2 hover:bg-gray-100"
                >Configuración</a
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'home' }"
               class="block px-4 py-2 hover:bg-gray-100"
              >
                Cerrar sesión
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- Menú mobile -->
    <ul
      v-if="menuAbierto"
      class="md:hidden flex flex-col gap-4 mt-4 bg-blue-700 p-4 rounded absolute left-0 w-full"
    >
      <li><a href="/" class="hover:underline">Inicio</a></li>
      <li> <RouterLink :to="{name:'nueva-persona'}" class="block px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent"> Agregar Persona</RouterLink></li>

      <!-- Dropdown simulado en móvil -->
      <li class="relative">
        <button
          @click="dropdownAbierto = !dropdownAbierto"
          class="hover:underline w-full text-left"
        >
          {{ userStore.nombre }}
        </button>
        <ul
          v-if="dropdownAbierto"
          class="bg-white text-black mt-2 rounded shadow-md w-full"
        >
          <li>
            <a href="/perfil" class="block px-4 py-2 hover:bg-gray-100"
              >Perfil</a
            >
          </li>
          <li>
            <a href="/configuracion" class="block px-4 py-2 hover:bg-gray-100"
              >Configuración</a
            >
          </li>
          <li>
            <RouterLink
              :to="{ name: 'home' }"
              class="block px-4 py-2 hover:bg-gary-700 md:hover:bg-transparent"
            >
              Cerrar sesión
            </RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useUsuarioStore } from "@/stores/usuario";

const menuAbierto = ref(false);
const dropdownAbierto = ref(false);
const userStore = useUsuarioStore();
</script>
