<script setup>
import { RouterLink } from "vue-router";
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
    <RouterLink
      :to="{ name: to }"
      class="block md:inline-block bg-indigo-600 text-white p-1 uppercase font-extralight rounded-sm hover:bg-indigo-700 cursor-pointer transition-colors"
    >
      <slot></slot>
    </RouterLink>
</template>
