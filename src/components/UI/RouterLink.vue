<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
defineProps({
  to: {
    type: String,
  },
});
</script>

<template>
  <button
    class="bg-cyan-800 py-1  px-2 text-center capitalize rounded-md hover:bg-cyan-900 transition-colors cursor-pointer"
    type="button"
    @click="router.push({ name: to })"
  >
    <slot></slot>
  </button>
</template>
