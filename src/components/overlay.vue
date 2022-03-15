<script setup lang="ts">
interface Emit {
  (event: "close-overlay"): void;
}
const emit = defineEmits<Emit>();
</script>

<template>
  <div @click.self="emit('close-overlay')" class="overlay">
    <slot></slot>
  </div>
</template>

<style scoped>
.overlay {
  overflow: hidden;
  top: 0;
  left: 0;
  position: fixed;
  height: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
