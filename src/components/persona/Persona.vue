<script setup>
import { useRouter } from 'vue-router';
const router=useRouter()
import { usePersonaStorage } from '@/store/persona';
const usePersona= usePersonaStorage()
const props=defineProps({
    persona:{
        type:Object,
        required:true
    }
})
const eliminarPersona=()=>{
    usePersona.eliminarPersona(props.persona.id)
}
console.log(props.persona)
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
        <td class="grid grid-cols-1 md:grid-cols-2 gap-2 m-2 text-center">
         <RouterLink class="py-1 rounded-md  bg-green-400 hover:bg-white border-2 hover:border-green-400 hover:cursor-pointer" :to="{name:'EditarPersona',params:{id:persona.id}}"><i class="fa-solid fa-pencil text-black"></i> </RouterLink>
         
         <button class="bg-green-400 py-1 rounded-md  hover:cursor-pointer hover:bg-white border-2 hover:border-green-400 " @click="eliminarPersona"><i class="fa-solid fa-trash-can text-black"></i></button>
        </td>
    </tr>
</template>