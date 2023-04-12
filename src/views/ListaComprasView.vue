<template>
  <h2 class="mb-5 text-3xl font-semibold text-gray-700">Lista de Compras</h2>
  <ul class="mx-5 my-4 list-disc">
    <li v-for="item in items" class="py-px">
      <strong>{{ item.name }}</strong> - {{ item.qtd }}
    </li>
  </ul>
  <p v-if="items.length === 0" class="py-px font-semibold text-gray-600">Nenhum item adicionado até o momento</p>
  <form @submit.prevent="addItem" method="get" class="mt-6 w-full max-w-md rounded bg-gray-100 p-3.5">
    <div class="mb-4">
      <label for="newItemName" class="block text-gray-600">Nome do Produto</label>
      <input
        id="newItemName"
        v-model="newItemName"
        type="text"
        class="mt-1 block w-full rounded border border-gray-300 p-1.5 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50" />
    </div>
    <div class="mb-4">
      <label for="newItemQtd" class="block text-gray-600">Quantidade</label>
      <input
        id="newItemQtd"
        v-model="newItemQtd"
        type="number"
        min="1"
        class="mt-1 block w-full rounded border border-gray-300 p-1.5 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50" />
      <div v-if="errorMessage" class="mt-1 text-red-500">{{ errorMessage }}</div>
    </div>
    <button type="submit" class="rounded bg-teal-500 px-4 py-2 text-white hover:bg-teal-600">Adicionar Item</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const items = ref([]);

const newItemName = ref("");
const newItemQtd = ref(1);

const errorMessage = ref("");

function addItem() {
  if (newItemName.value !== "" && newItemQtd.value > 0) {
    items.value.push({
      name: newItemName.value,
      qtd: newItemQtd.value,
    });
    newItemName.value = "";
    newItemQtd.value = 1;
    errorMessage.value = "";
  } else {
    errorMessage.value = "Preencha todos os campos corretamente";
  }
}
</script>
