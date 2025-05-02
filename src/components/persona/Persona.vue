<script setup>
import { useRouter } from 'vue-router';
const router=useRouter()
const props=defineProps({
    persona:{
        type:Object,
        required:true
    }
})
</script>
<template>
    <tr class="text-center">
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{persona.documento}} </p>
        </td>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{persona.nombre}}  {{ persona.apellidoMaterno }} {{ persona.apellidoPaterno }}</p>
            <p class="text-gray-500">{{ persona.email }}</p>
        </td>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{persona.departamento}} / {{ persona.provincia }}/{{ persona.distrito }}</p>
            <p class="text-gray-500">{{ persona.direccion }}</p>
        </td>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{persona.sede}} </p>
            <p class="text-gray-500">{{ persona.unidadNegocio }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold">{{ persona.telefono }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
         <RouterLink class="bg-green-200 px-3 py-2 rounded-md text-black hover:bg-green-700 hover:text-white" :to="{name:'EditarPersona',params:{id:persona.id}}">Editar</RouterLink>
        </td>
    </tr>
</template>