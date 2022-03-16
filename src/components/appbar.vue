<script setup lang="ts">
interface Emit {
  (event: "toggle-searchBar"): void;
}

const emit = defineEmits<Emit>();
</script>

<template>
  <nav>
    <div class="app-title">
      <img
        src="https://cdn-icons-png.flaticon.com/512/287/287221.png"
        alt="pokemon image"
        class="card-image"
      />
      <h2>POKEDEX</h2>
    </div>

    <div class="actions">
      <button @click="emit('toggle-searchBar')">
        <div class="search-hotkey">ctrl + k</div>
        <i class="material-icons"> search </i>
      </button>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: #437660;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  z-index: 2;
}

.app-title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.app-title h2 {
  font-size: 1.5rem;
  margin-left: 1rem;
}

img {
  width: 2rem;
  user-zoom: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.actions button {
  display: flex;
  padding: 0.5rem;
  background-color: #296052;
  align-items: center;
  border: none;
  border-radius: 0.5rem;
  transition: all 0.3s ease 0s;
}
.actions button:nth-child(2) {
  margin-left: 1rem;
}
.actions button:hover {
  transform: translateY(-3px);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}

.search-hotkey {
  border: solid 0.5px #002a33;
  border-radius: 0.5rem;
  color: #002a33;
  margin-right: 1rem;
  padding: 0.2rem;
}

.search-hotkey:hover {
  color: #f5deb3;
  border: solid 0.5px #f5deb3;
}

@media (max-width: 765px) {
  .search-hotkey {
    display: none;
  }
}
</style>
