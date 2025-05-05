<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
defineProps({
  to: {
    type: String,
  },
  tipo:{
    type:String,
  },
  otraClase:{
    type:String
  }
});
</script>

<template>
  <button
    :class="otraClase"
    class="text-green-400 text-sm font-semibold border-2 border-green-400 p-2 rounded-2xl shadow-2xl hover:shadow-green-700 hover:text-black cursor-pointer hover:bg-green-400 transition-colors"
    :type="tipo"
    @click="router.push({ name: to })"
  >
    <slot></slot>
  </button>
</template>
