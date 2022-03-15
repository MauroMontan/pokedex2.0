<script setup lang="ts">
import appbar from "./components/appbar.vue";
import pokemonList from "./components/pokemon_list.vue";
import searchBar from "./components/searchBar.vue";
import pokemonInfo from "./components/pokemon_info.vue";
import { useUiState } from "./store";
import { onMounted } from "vue";

const store = useUiState();

const toggleSearchBar = async () => {
  store.isSearchBaroOpen = true;
};

onMounted(() => {
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey && e.key === "k") || e.key === "K") {
      toggleSearchBar();
      e.preventDefault();
      return;
    }
  });
});
</script>

<template>
  <header><appbar @toggle-search-bar="toggleSearchBar" /></header>

  <main>
    <pokemonList />
  </main>

  <pokemonInfo v-if="store.isPOkemonInfoOpen" />
  <searchBar v-if="store.isSearchBaroOpen" />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fredoka&display=swap");
* {
  font-family: "Fredoka", sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
  overflow: hidden;
}
#app {
  background-color: #99b499;
  height: 100%;
}

header {
  width: 100%;
  position: fixed;
}

::-webkit-scrollbar {
  display: none;
}
</style>
