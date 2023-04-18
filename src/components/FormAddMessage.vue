<script setup>
import { ref } from "vue";
import { chat, generateId } from "../message";

const message = ref("");
const errorMessage = ref("");

function addMessage() {
  if (message.value !== "") {
    chat.addMessage({
      id: generateId(),
      text: message.value,
      from: "user",
    });
    errorMessage.value = "";
    message.value = "";
  } else {
    errorMessage.value = "Preencha todos os campos corretamente";
  }
}
</script>
<template>
  <form method="post" @submit.prevent="addMessage"
    class="mt-6 w-full max-w-auto rounded bg-gray-100 p-3.5 flex flex-row items-center justify-between">
    <div class="mb-4 mx-4 flex  w-80">
      <input id="message" name="message" placeholder="Digite sua mensagem" v-model="message" type="text"
        class="mt-1 w-80 flex rounded border border-gray-300 p-1.5 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50" />
    </div>
    <button type="submit" class="rounded flex self-end bg-purple-500 px-4 py-2 text-white hover:bg-teal-600 mb-4">
      Enviar
    </button>
  </form>
  <div v-if="errorMessage" class="p-2 bg-red-100 border border-red-500 rounded text-red-500">
    {{ errorMessage }}
  </div>
</template>
