<template>
  <h2 class="mb-5 text-3xl font-semibold text-gray-700">Seja bem-vindo ao master demo!</h2>

  <p class="my-3.5 text-sm md:text-base">
    Neste demo teremos inicialmente duas rotas já configuradas (troca de página) a primeira rota essa daqui chamamos de
    <strong>/</strong>.
  </p>

  <p class="my-3.5 text-sm md:text-base">
    Cada tela/rota do Vue também é um component, logo não tem muito mistério gere um component novo e defina a rota para
    "abri-lo" no arquivo
    <strong>router/index.js</strong>.
  </p>

  <p class="my-3.5 text-sm md:text-base">
    Por fim clique no link abaixo para abrir nossa segunda rota que é a
    <strong>/lista-compras</strong>.
  </p>

  <div class="my-6">
    <RouterLink
      to="/lista-compras"
      class="inline-flex rounded-md bg-gray-100 p-4 text-base font-semibold hover:bg-gray-200 md:text-lg"
      active-class="text-teal-600">
      Abrir lista de compras
    </RouterLink>
  </div>
</template>
