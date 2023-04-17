<script setup>

import { chat } from "../message";
import FormAddItem from "../components/FormAddMessage.vue";
import { ref, watch, nextTick } from "vue";

const chatMessages = ref(null);

watch(() => chat.messages, () => {
  nextTick(() => {
    chatMessages.value.scrollTop = chatMessages.value.scrollHeight;
  });
});
</script>

<template>
  <h2 class="mb-3  text-3xl text-center  mx-2 font-semibold text-gray-700">Simple Chat make in Vue.js</h2>
  <div class=" py-3 h-screen flex items-center justify-center">
    <div id="chat-container"
      class=" bg-white shadow-lg rounded-lg overflow-hidden mx-auto border border-purple-700 w-full max-w-2xl">
      <header class="border-b border-purple-700 px-4 py-3 bg-purple-400">
        <h2 class="text-2xl font-bold">Atendimento on-line</h2>
      </header>
      <main ref="chatMessages" id="chat-messages" class="p-4 h-96 flex flex-col overflow-y-auto"
        :scrollTop="chatMessages?.scrollHeight">
        <div class="flex flex-col self-start mb-4">
          <div class="text-sm font-semibold mb-px">Atendente diz:</div>
          <p class="bg-gray-200 rounded px-2.5 py-1">Olá em que posso lhe ajudar?</p>
        </div>
        <div v-for="message in chat.messages" :key="message.id"
          :class="{ 'flex flex-col items-end self-end mb-4': message.from === 'user', 'flex flex-col self-start mb-4': message.from !== 'user' }">
          <div class="text-sm font-semibold mb-px">{{ message.from === 'user' ? 'Você diz:' : 'Atendente diz:' }}</div>
          <p
            :class="['bg-' + (message.from === 'user' ? 'purple' : 'gray') + '-200', 'rounded', 'px-2.5', 'py-1', 'break-all', 'max-w-md']">
            {{ message.text }}</p>
        </div>
      </main>
      <footer>
        <FormAddItem />
      </footer>
    </div>
  </div>
</template>
