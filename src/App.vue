<script setup>
import {RouterView } from "vue-router";

</script>

<template>
  <main class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
    <transition name="fade" mode="out-in">
      <RouterView />
    </transition>
  </main>
</template>
