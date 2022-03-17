import { defineStore } from "pinia";
import axios from "axios";
import { Pokemon } from "../interfaces";

export const useUiState = defineStore("uiState", {
  state: () => ({
    isPOkemonInfoOpen: false,
    isSearchBaroOpen: false,
  }),
  getters: {},
  actions: {},
});

export const usePokemonStore = defineStore("pokemonStore", {
  state: () => ({
    currentPokemon: {} as Pokemon,
    pokemonList: [] as Array<Pokemon>,
    isLoading: false,
    notFound: false,
  }),

  actions: {
    async getCurrentPokemon(payload: string | number) {
      const data = await this.getPokemon(payload);

      this.currentPokemon = data;
    },

    async getPokemon(payload: string | number) {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${payload}`
      );
      const data = response.data;

      const newPokemon: Pokemon = {
        name: data.name,
        id: data.id,
        base_experience: data.base_experience,
        height: data.height,
        species: data.species.name,
        weight: data.weight,
        types: data.types,
        stats: data.stats,
        sprite: data.sprites.other["official-artwork"].front_default,
      };

      return newPokemon;
    },

    async getpokemonList(scope: number) {
      this.isLoading = true;
      const tempPokemons = [] as Array<Pokemon>;
      for (let index = 1; index < scope + 1; index++) {
        tempPokemons.push(await this.getPokemon(index));
      }

      this.pokemonList = [...tempPokemons];
      setTimeout(() => {
        this.isLoading = false;
      }, 600);
    },
  },
});
