<script setup>
import { chat } from "../message";
import FormAddItem from "../components/FormAddMessage.vue";
</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <h2 class="text-3xl font-semibold text-gray-700">Seja bem-vindo ao Simple Chat</h2>
    <p class="my-3.5 text-sm md:text-base">
      Neste Exercicio vamos criar um simple chat usando Vue.js,tailwindcss e o Vite.
    </p>
    <p class="my-3.5 text-sm md:text-base">
      Por fim clique no link abaixo para abrir nossa segunda rota que é a
      <strong>/simple-chat</strong>.
    </p>
    <div class="my-6">
      <RouterLink to="/simple-chat"
        class="inline-flex rounded-md bg-gray-100 p-4 text-base font-semibold hover:bg-gray-200 md:text-lg"
        active-class="text-teal-600">
        Abrir Simple Chat
      </RouterLink>
    </div>
  </div>
</template>

