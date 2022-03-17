<script setup lang="ts">
import { onMounted, ref } from "vue";
import { usePokemonStore, useUiState } from "../store";
import overlay from "./overlay.vue";

const store = useUiState();

const pokemonStore = usePokemonStore();

const input = ref();

const inputSearch = ref("");

onMounted(() => {
  input.value.focus();
});

const closeSearchBar = () => {
  store.isSearchBaroOpen = false;
};

const searchPokemon = () => {
  pokemonStore.getCurrentPokemon(inputSearch.value.toLowerCase());
  closeSearchBar();
  store.isPOkemonInfoOpen = true;
};
</script>
<template>
  <overlay @keydown.esc="closeSearchBar" @close-overlay="closeSearchBar">
    <div class="search-bar">
      <i @click="searchPokemon" class="material-icons">search</i>

      <input
        placeholder="press 'enter' to search, 'esc' to exit"
        ref="input"
        v-model="inputSearch"
        type="text"
        @keyup.enter="searchPokemon"
      />
    </div>
  </overlay>
</template>

<style scoped>
.search-bar {
  display: flex;
  background-color: #0c4f49;
  border-radius: 1rem;
  align-items: center;
  padding: 0.3rem;
  width: 40%;
  height: 3.5rem;
}
.search-bar input {
  text-align: center;
  background-color: #0c4f49;
  outline: none;
  height: 3rem;
  color: white;
  width: 100%;
  border: none;
  text-transform: uppercase;
}
.search-bar i {
  color: white;
  padding-left: 0.5rem;
  cursor: pointer;
}

.search-bar i:hover {
  color: black;
}

@media (max-width: 768px) {
  .search-bar {
    width: 90%;
  }

  .search-bar input {
    content: none;
  }
}
</style>
