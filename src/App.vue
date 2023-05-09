<script setup>
import HelloWorld from './views/HelloWorld.vue'
</script>

<template>
  <router-view v-slot="{ Component }">
  <transition name="moveUp">
    <component :is="Component" />
  </transition>
  </router-view>
</template>

<style scoped>
  .moveUp-enter-active {
    animation: fadeIn 1s ease-in;
  }
  @keyframes fadeIn {
     0% { opacity: 0; }
     0% { opacity: 0.5; }
     0% { opacity: 1; }
  }
  .moveUp-leave-active {
    animation: moveUp 0.3s ease-in;
  }
  @keyframes moveUp {
    0% { transform: translateY(0); }
   100% { transform: translateY(-400px); }
  }
</style>


