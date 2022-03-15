<script setup lang="ts">
import { computed } from "vue";
import { Pokemon } from "../interfaces";
import { usePokemonStore, useUiState } from "../store";

interface Props {
  pokemon: Pokemon;
}

const store = useUiState();
const props = defineProps<Props>();
const pokemonStore = usePokemonStore();

const { name, id, sprite, types } = props.pokemon;

const currentImage = computed(() => {
  return sprite;
});

const togglePokemonInfo = () => {
  pokemonStore.getPokemon(name);
  store.isPOkemonInfoOpen = !store.isPOkemonInfoOpen;
};
</script>

<template>
  <div class="card">
    <div class="card-title">
      <h5 v-text="name"></h5>
      <div>
        <h5>#{{ id }}</h5>
      </div>
    </div>

    <img :src="currentImage" alt="pokemon image" class="card-image" />
    <div class="types">
      <h2 v-for="type in types" v-text="type.type.name"></h2>
    </div>
    <div class="card-actions">
      <button @click="togglePokemonInfo">more info</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #759c7d;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}

.card-image {
  width: 100%;
  display: block;
  user-zoom: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.types {
  display: flex;
  justify-content: center;
}
.types h2:nth-child(2) {
  color: wheat;
}
.types h2:nth-child(2)::before {
  content: "/";
  color: wheat;
}
.card-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-actions {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: end;
  align-items: center;
}
.card-actions button {
  padding: 0.3rem;
  border: solid 0.5px #096553;
  border-radius: 0.6rem;
  background-color: #096553;
  color: #99b499;
}
.card-actions button:hover {
  border-radius: 0.5rem;
  background-color: #1c2b23;
  color: #99b499;
}
</style>
