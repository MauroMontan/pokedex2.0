<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { usePokemonStore } from "../store";
import pokemonCard from "./pokemon_card.vue";
const store = usePokemonStore();

const { pokemonList } = storeToRefs(store);

const count = ref(20);

const loadFiveMore = () => {
  count.value += 8;
  store.getpokemonList(count.value);
};

onMounted(() => {
  store.getpokemonList(count.value);
});
</script>

<template>
  <div class="content">
    <div class="cards-container">
      <pokemonCard v-for="pokemon in pokemonList" :pokemon="pokemon" />
    </div>

    <button @click="loadFiveMore">load more</button>
  </div>
</template>

<style scoped>
.cards-container {
  display: grid;
  gap: 1rem;
  padding-top: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  max-width: 90%;
  margin: auto;
  margin-top: 8%;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: auto;
}

.content button {
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 0.5rem;
  border: none;
  border-radius: 10px;
  background-color: #096553;
  color: beige;
}

@media (max-width: 768px) {
  .cards-container {
    margin-top: 15%;
  }
}
</style>
