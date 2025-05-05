<script setup>
import RouterLink from "@/components/UI/RouterLink.vue";
import Header from "@/components/Header.vue";
import Persona from "@/components/persona/Persona.vue";
import { ref, onMounted, computed, watch } from "vue";
import PersonaService from "@/services/PersonaService";
import { useRoute } from "vue-router";
import { usePersonaStorage } from "@/store/persona";
const usePersona=usePersonaStorage()
const route = useRoute();
//const personas = ref([]);
const currentPage = ref(1); // Página actual
const itemsPerPage = 5; // Número de elementos por página

onMounted(() => {
  
  //listarPersonas()
});
/*const listarPersonas = () => {
  PersonaService.obtnerPersonas()
    .then(({ data }) => {
      personas.value = data;
    })
    .catch((error) => {
      console.log("Hubo un error al obtener las personas", error);
    });
};*/

const existenPersonas = computed(() => {
  return usePersona.personas.length > 0;
});
//watch(personas,() => {listarPersonas();},{deep: true,});

// Computada para obtener las personas paginadas
const paginatedPersonas = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return usePersona.personas.slice(start, start + itemsPerPage);
});

// Computada para obtener el total de páginas
const totalPages = computed(() => {
  return Math.ceil(usePersona.personas.length / itemsPerPage);
});

// Función para cambiar de página
const cambiarPagina = (pagina) => {
  if (pagina > 0 && pagina <= totalPages.value) {
    currentPage.value = pagina;
  }
};
</script>

<template>
  <Header />
  <div v-if="route.path === '/admin/persona'" class="container mx-auto px-4">
    <div class="flex justify-between">
      <RouterLink to="dasboard"><i class="fa-solid fa-bars"></i> Menu Principal</RouterLink>
      <RouterLink to="NuevaPersona"><i class="fa-solid fa-user-plus"></i> Nueva Persona </RouterLink>
    </div>
    

    <div
      v-if="existenPersonas"
      class="flow-root mx-auto mt-10 p-5 bg-white shadow-2xl shadow-cyan-100"
    >
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead class="text-center text-gray-600 uppercase">
              <tr>
                <th class="p-2">
                 Documento
                </th>
                <th class="p-2">
                  Nombres y apellidos
                </th>
                <th class="p-2">
                  Distrito
                </th>
                <th class="p-2">
                  Sede
                </th>
                <th class="p-2">
                  Telefono
                </th>
                <th class="p-2">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <Persona
                v-for="persona in paginatedPersonas"
                :key="persona.id"
                :persona="persona"
                :id="persona.id"
              />
            </tbody>
          </table>

          <!-- Paginación -->
        <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div class="flex flex-1 justify-between sm:hidden">
              <button @click="cambiarPagina(currentPage - 1)" :disabled="currentPage <= 1">
                Anterior
              </button>
              <button @click="cambiarPagina(currentPage + 1)" :disabled="currentPage >= totalPages">
                Siguiente 
              </button>
            </div>
            <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p class="text-sm text-gray-700">
                  Mostrando
                  <span class="font-medium">{{ (currentPage - 1) * itemsPerPage + 1 }}</span> -
                  <span class="font-medium">{{ Math.min(currentPage * itemsPerPage, usePersona.personas.length) }}</span>
                  de
                  <span class="font-medium">{{ usePersona.personas.length}}</span> Registros
                </p>
              </div>
              <div>
                <nav class="flex justify-between shadow-sm border " aria-label="Pagination">
                  <button class="p-2 bg-cyan-900 hover:cursor-pointer" @click="cambiarPagina(currentPage - 1)" :disabled="currentPage <= 1">
                    <i class="fa-solid fa-arrow-left"></i> 
                  </button>
                  <button class="text-black p-2 hover:cursor-pointer" v-for="page in totalPages" :key="page" :class="{'bg-green-400': page === currentPage}" @click="cambiarPagina(page)">
                    {{ page }}
                  </button>
                  <button class="p-2 bg-cyan-900 hover:cursor-pointer" @click="cambiarPagina(currentPage+ 1)" :disabled="currentPage >= totalPages">
                     <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p v-else class="text-white text-center mt-20">No hay clientes</p>
  </div>

  <!-- Aquí va el contenido dinámico de las subrutas -->
  <router-view />
</template>
