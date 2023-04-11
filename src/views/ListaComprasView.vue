<template>
  <h2 class="mb-5 text-3xl font-semibold text-gray-700">Lista de Compras</h2>
  <ul class="mx-5 my-4 list-disc">
    <li class="py-px"><strong>Queijo</strong> - 1</li>
    <li class="py-px"><strong>Presunto</strong> - 1</li>
    <li class="py-px"><strong>Pão</strong> - 1</li>
  </ul>
  <form method="get" class="mt-6 w-full max-w-md rounded bg-gray-100 p-3.5">
    <div class="mb-4">
      <label for="newItemName" class="block text-gray-600">Nome do Produto</label>
      <input
        id="newItemName"
        type="text"
        class="mt-1 block w-full rounded border border-gray-300 p-1.5 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50" />
    </div>
    <div class="mb-4">
      <label for="newItemQtd" class="block text-gray-600">Quantidade</label>
      <input
        id="newItemQtd"
        type="number"
        min="1"
        class="mt-1 block w-full rounded border border-gray-300 p-1.5 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50" />
      <div class="mt-1 hidden text-red-500">Mensagem de erro</div>
    </div>
    <button type="submit" class="rounded bg-teal-500 px-4 py-2 text-white hover:bg-teal-600">Adicionar Item</button>
  </form>
</template>
