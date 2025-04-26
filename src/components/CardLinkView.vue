<template>
    <a :href="href" class="cyber-link">
      <span>{{ text }}</span>
    </a>
  </template>
  
  <script setup>
  defineProps({
    href: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  })
  </script>
  
  <style scoped>
  </style>
  