<script setup lang="ts">
import overlay from "./overlay.vue";
import { usePokemonStore, useUiState } from "../store";
import { storeToRefs } from "pinia";
import { computed, onMounted } from "vue";

const store = useUiState();
const pokemonStore = usePokemonStore();

const { currentPokemon } = storeToRefs(pokemonStore);

const pokemonImage = computed(() => {
  return currentPokemon.value.sprite;
});

const closePokemonInfo = () => {
  store.isPOkemonInfoOpen = false;
};

onMounted(() => {
  document.onkeydown = (e) => {
    e = e || window.event;

    if (e.keyCode === 27) {
      closePokemonInfo();
    }
  };
});
</script>

<template>
  <overlay @close-overlay="closePokemonInfo">
    <div class="modal-card">
      <div class="card-header">
        <h2 v-text="currentPokemon.name" />
        <h2>#{{ currentPokemon.id }}</h2>
      </div>
      <img :src="pokemonImage" alt="pokemon image" class="modal-card-image" />

      <div class="types">
        <h2 v-for="type in currentPokemon.types" v-text="type.type.name"></h2>
      </div>

      <div class="stats">
        <div v-for="pokemon in currentPokemon.stats" class="stat">
          <h2 v-text="pokemon.stat.name" />

          <div class="data">
            <progress :value="pokemon.base_stat" max="100">
              {{ pokemon.base_stat }}
            </progress>
            <h2 v-text="pokemon.base_stat" />
          </div>
        </div>
      </div>

      <div class="about">
        <h2>Height: {{ currentPokemon.height }}</h2>
        <h2>Weight: {{ currentPokemon.weight }}</h2>
        <h2>XP base: {{ currentPokemon.base_experience }}</h2>
      </div>
    </div>
  </overlay>
</template>

<style scoped>
.modal-card {
  width: 35%;
  position: absolute;
  display: flex;
  background-color: #759c7d;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  border-radius: 1.3rem;
}

@keyframes changewidth {
  from {
    transform: translateY(-8px);
  }

  to {
    transform: translateY(8px);
  }
}

.data {
  display: flex;
  width: 70%;
  justify-content: space-around;
}
.modal-card-image {
  width: 40%;
  animation-duration: 0.9s;
  animation-name: changewidth;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
  user-zoom: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.card-header {
  display: flex;
  width: 90%;
  justify-content: space-between;
}

.card-header h2 {
  font-size: 2rem;
  color: #102621;
}

.types {
  display: flex;
  justify-content: center;
}
.types h2 {
  font-size: 1.6rem;
  color: #102621;
}
.types h2:nth-child(2) {
  color: wheat;
}
.types h2:nth-child(2)::before {
  content: "/";
  color: wheat;
}

.stats {
  margin-top: 1rem;
  width: 100%;
  height: 100%;
}
.stat {
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 16%;
  align-items: center;
  padding: 0.3rem;
}
.stat h2 {
  color: wheat;
  font-size: 1.1rem;
}

.about {
  padding: 0.3rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  margin-top: 0.5rem;
}

.about h2 {
  color: #102621;
}

@media (max-width: 768px) {
  .modal-card {
    width: 95%;
    height: 80%;
  }
  .stat h2 {
    color: wheat;
    font-size: 1rem;
  }
  .stat {
    padding: 0.2rem;
  }
}
</style>
