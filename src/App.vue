<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";

const isScrollingHeader = ref(false);
const isMenuOpen = ref(false);
const lastPos = ref(0);

onMounted(() => {
  window.addEventListener(
    "scroll",
    () => {
      const header = document.getElementById("header");
      const currPos = document.documentElement.scrollTop;

      if (header) {
        if (currPos > +lastPos.value) {
          if (currPos > header.offsetHeight) {
            isScrollingHeader.value = true;
          }
        } else {
          isScrollingHeader.value = false;
        }
      }

      lastPos.value = currPos;
    },
    false
  );
});

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <header
    id="header"
    class="fixed top-0 z-50 w-full  transform bg-black px-6 py-5 transition-all duration-500 ease-in-out"
    :class="{
      '-translate-y-full': isScrollingHeader,
      'shadow-md': !isScrollingHeader,
    }">
    <div class="mx-auto flex max-w-5xl flex-wrap items-center justify-between">
      <div class="sm:mr-8">
        <a class="flex items-center" href="/">
          <span class="self-center text-xl font-semibold text-purple-700 ">Chat</span>
        </a>
      </div>
      <nav
        id="menu"
        class="order-last mt-2 w-full flex-grow items-center md:order-none md:mt-0 md:flex md:w-auto"
        :class="{ hidden: !isMenuOpen }">
        <RouterLink
          to="/"
          class="mr-4 mt-4 block text-base font-medium text-slate-700 hover:text-purple-600 md:mt-0 md:inline-block"
          active-class="text-purple-600">
          Home
        </RouterLink>
        <RouterLink
          to="/simple-chat"
          class="mr-4 mt-4 block text-base font-medium text-slate-700 hover:text-purple-600 md:mt-0 md:inline-block"
          active-class="text-purple-600">
          Simple Chat
        </RouterLink>
      </nav>
      <div
        id="menu-toggle"
        class="flex cursor-pointer items-center text-slate-700 hover:text-purpel-600 sm:ml-6 md:hidden"
        @click="toggleMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="h-5 w-5 text-gray-900"
          viewBox="0 0 24 24">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </div>
    </div>
  </header>
  <div class="">
    <main class="mx-7 mt-28 flex-grow lg:mx-6">
      <div class="mx-auto max-w-5xl">
        <RouterView />
      </div>
    </main>
    <footer class="bg-gray-100 py-3 w-full">
      <div class="mx-auto max-w-5xl flex justify-center">
        <p class="text-gray-700 text-sm">
          Made with João Vittor
          <span class="text-purple-500">2023💜</span> by
          <a
            href="https://github.com/JVGFern"
            class=" hover:text-purpel-700 text-purple-600"
            target="_blank"
            rel="noopener noreferrer">
            @JVGFern
          </a>
        </p>
      </div>
    </footer>
 </div>        
</template>
