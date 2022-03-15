<script setup lang="ts">
import { computed, ref } from "vue";
import { Pokemon } from "../interfaces";
import { usePokemonStore, useUiState } from "../store";

interface Props {
  pokemon: Pokemon;
}

const dialog = ref(false);
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
  <div
    @mouseover="dialog = true"
    @mouseleave="dialog = false"
    @click="togglePokemonInfo"
    class="card"
  >
    <div v-if="dialog" class="card-overlay">
      <h2>more info</h2>
    </div>
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
  </div>
</template>

<style scoped>
.card {
  background-color: #759c7d;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  transition: all 0.3s ease 0s;
}

.card:hover {
  transform: scale(105%);
  background-color: rgb(67, 118, 96, 0.9);
}

.card-overlay {
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.card-overlay h2 {
  font-size: 2.3rem;
  color: #f5deb3;
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
.types h2:nth-child(1) {
  color: #102621;
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
  color: #102621;
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
  border-radius: 0.6rem;
  border: none;
  background-color: #759c7d;
  text-decoration: underline;
}
.card-actions button:hover {
  border-radius: 0.5rem;
  background-color: #1c2b23;
  color: #99b499;
}
</style>
