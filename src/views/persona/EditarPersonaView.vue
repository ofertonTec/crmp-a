<script setup>
import { FormKit } from "@formkit/vue";
import { onMounted, reactive } from "vue";
import RouterLink from "@/components/UI/RouterLink.vue";
import PersonaService from "@/services/PersonaService";

import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const router = useRouter(); //permite acceder a la propiedad params
const { id } = route.params;
console.log(id);

const persona = reactive({
  sede: "",
  unidadNegocio: "",
  documento: "",
  fechaNacimiento: "",
  login: "",
  nombre: "",
  apellidoMaterno: "",
  apellidoPaterno: "",
  password: "",
  direccion: "",
  departamento: "",
  provincia: "",
  distrito: "",
  telefono: "",
  telefono2: "",
  telefono3: "",
  email: "",
  email2: "",
  foto: "",
});
const guardarLocalStorage=()=>{
  
}
onMounted(() => {
  PersonaService.obtnerPersona(id).then(({ data }) => {
    console.log(typeof id);
    Object.assign(persona, data);
  });
});
const actualizarPersona = (data) => {
  PersonaService.actualizarPersona(id, data).then(() => {
    router.push({ name: "ListaPersonas" });
  });
};
</script>

<template>
  <div class="px-4 mb-4">
    <RouterLink to="ListaPersonas" tipo="button"> Atrás </RouterLink>
  </div>
  <div class="flex justify-center m-4 p-4">
    <div
      class="container mx-auto p-5 rounded-2xl w-full border border-green-400 shadow-[0_0_30px_rgba(0,255,255,0.3)]"
    >
      <h1 class="text-3xl text-green-400 font-bold mb-4">
        <i class="fas fa-user-astronaut"></i> Registar Persona
      </h1>
      <hr class="mb-5" />

      <FormKit
        type="form"
        :actions="false"
        @submit="actualizarPersona"
        :value="persona"
        incomplete-message="Revisar los campos solicitados y completarlos"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormKit
            type="select"
            name="sede"
            label="Sede"
            :options="{ '': 'Seleccione', lima: 'Lima', arequipa: 'Arequipa' }"
            validation="required"
            :validation-messages="{ required: 'Ingrese la sede' }"
            v-model="persona.sede"
          />
          <FormKit
            type="select"
            name="unidadNegocio"
            label="Unidad Negocio"
            validation="required"
            :options="{ '': 'Seleccione', otro: 'Otro' }"
            :validation-messages="{ required: 'Ingrese la unidad de negocio' }"
            v-model="persona.unidadNegocio"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <FormKit
            type="text"
            name="documento"
            label="N° Documento"
            placeholder="N° de documento"
            validation="required|*matches:/^[0-9]{8}$/"
            :validation-messages="{
              required: 'Ingrese el N° de documento',
              matches: 'Ingrese un valor válido',
            }"
            v-model="persona.documento"
          />
          <FormKit
            type="date"
            name="fechaNacimiento"
            label="Fecha Nacimiento"
            validation="required"
            :validation-messages="{
              required: 'Ingrese la fecha de nacimiento',
            }"
            v-model="persona.fechaNacimiento"
          />
          <div class="flex items-center justify-center">
            <FormKit
              type="text"
              name="login"
              label="Login Usuario"
              placeholder="Ingrese login"
              validation="required"
              v-model="persona.login"
            />
            <button class="hover:cursor-pointer">
              <i class="fas fa-search text-green-200 text-3xl p-1"></i>
            </button>
          </div>
          <FormKit
            type="text"
            name="nombre"
            label="Nombres"
            placeholder="Escribir nombres"
            validation="required"
            :validation-messages="{ required: 'Ingrese el nombre' }"
            v-model="persona.nombre"
          />
          <FormKit
            type="text"
            name="apellidoMaterno"
            label="Apellido Materno"
            placeholder="Escribir apellido materno"
            validation="required"
            :validation-messages="{ required: 'Ingrese el apellido materno' }"
            v-model="persona.apellidoMaterno"
          />
          <FormKit
            type="text"
            name="apellidoPaterno"
            label="Apellido Paterno"
            placeholder="Escribir apellido paterno"
            validation="required"
            :validation-messages="{ required: 'Ingrese el apellido paterno' }"
            v-model="persona.apellidoPaterno"
          />
          <div class="flex items-center justify-center">
            <FormKit
              type="password"
              name="password"
              label="Password"
              placeholder="Ingrese password"
              validation="required"
              :validation-messages="{ required: 'Ingrese el password' }"
              v-model="persona.password"
            />
            <i
              class="fas fa-eye text-green-200 text-3xl p-1 hover:cursor-pointer"
            ></i>
          </div>
        </div>
        <div class="grid grid-cols-1">
          <FormKit
            type="text"
            name="direccion"
            label="Dirección"
            placeholder="Escribir la dirección"
            validation="required"
            :validation-messages="{ required: 'Ingrese la dirección' }"
            v-model="persona.direccion"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <FormKit
            type="select"
            name="departamento"
            label="Departamento"
            :options="{ '': 'Seleccione', LIM: 'Lima' }"
            validation="required"
            :validation-messages="{ required: 'Seleccione el departamento' }"
            v-model="persona.departamento"
          />
          <FormKit
            type="select"
            name="provincia"
            label="Provincia"
            :options="{ '': 'Seleccione', LIM: 'Lima' }"
            validation="required"
            :validation-messages="{ required: 'Seleccione la provincia' }"
            v-model="persona.provincia"
          />
          <FormKit
            type="select"
            name="distrito"
            label="Distrito"
            :options="{ '': 'Seleccione', LIM: 'Lima' }"
            validation="required"
            :validation-messages="{ required: 'Ingrese el distrito' }"
            v-model="persona.distrito"
          />
          <FormKit
            type="text"
            name="telefono"
            label="Telefono"
            placeholder="Escribir teléfono"
            validation="required|*matches:/^[0-9]{9}$/"
            :validation-messages="{
              required: 'Ingrese telefono',
              matches: 'Ingrese un valor válido',
            }"
            v-model="persona.telefono"
          />
          <FormKit
            type="text"
            name="telefono2"
            label="Telefono 2"
            placeholder="Escribir teléfono 2"
            validation="*matches:/^[0-9]{9}$/"
            :validation-messages="{ matches: 'Ingrese un valor válido' }"
            v-model="persona.telefono2"
          />
          <FormKit
            type="text"
            name="telefono3"
            label="Telefono 3"
            placeholder="Escribir teléfono 3"
            validation="*matches:/^[0-9]{9}$/"
            :validation-messages="{ matches: 'Ingrese un valor válido' }"
            v-model="persona.telefono3"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div class="flex items-center justify-center">
            <FormKit
              type="email"
              name="email"
              label="Email"
              placeholder="Ingrese Email"
              validation="required|email"
              :validation-messages="{
                required: 'Ingrese el email',
                email: 'Ingrese un email válido',
              }"
              v-model="persona.email"
            />
            <i
              class="fas fa-envelope text-green-200 text-3xl p-1 hover:cursor-pointer"
            ></i>
          </div>
          <div class="flex items-center justify-center">
            <FormKit
              type="email"
              name="email2"
              label="Email Coorporativo"
              placeholder="Ingrese Email Coorporativo"
              validation="required|email"
              :validation-messages="{
                required: 'Ingrese el email coorporativo',
                email: 'Ingrese un email válido',
              }"
              v-model="persona.email2"
            />
            <i
              class="fas fa-envelope text-green-200 text-3xl p-1 hover:cursor-pointer"
            ></i>
          </div>
        </div>
        <div class="grid grid-cols-1">
          <FormKit
            type="file"
            label="Foto"
            name="foto"
            accept=".jpg,.png,.docx,.xml,.md,.csv"
            multiple="false"
            v-model="persona.foto"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-7 gap-4">
          <RouterLink tipo="submit">Registrar Persona</RouterLink>
          <RouterLink to='ListaPersonas' tipo="button">Cerrar</RouterLink>
        </div>
      </FormKit>
    </div>
  </div>
</template>
<style scoped>
.btn-futurista {
  background: transparent;
  border: 2px solid var(--accent);
  color: var(--accent);
  border-radius: 8px;
  transition: all 0.2s ease;
}
.btn-futurista:hover {
  background: var(--accent);
  color: #000;
  box-shadow: 0 0 12px var(--accent);
}
</style>
