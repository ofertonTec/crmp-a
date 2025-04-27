<script setup>
const props=defineProps({
    persona:{
        type:Object,
        required:true
    }
})
</script>
<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{persona.nombre}}  {{ persona.apellido }}</p>
            <p class="text-gray-500">{{ persona.email }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold"></p>
            <p class="text-gray-600"></p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm">

        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
         
        </td>
    </tr>
</template>