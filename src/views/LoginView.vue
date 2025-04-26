<script setup>
import { useUsuarioStore } from "@/store/usuario";
import { useRouter } from "vue-router";
import LoginForm from "@/components/LoginForm.vue";

const auth = useUsuarioStore();
const router = useRouter();

function handleLogin({ usuario, tipo }) {
  auth.login(usuario, tipo);
  router.push("/dashboard");
}
</script>

<template>
  <main class="">
    <LoginForm @loginSuccess="handleLogin" />
  </main>
</template>


