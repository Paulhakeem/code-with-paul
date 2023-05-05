<script setup>
import HelloWorld from './views/HelloWorld.vue'
</script>

<template>
  <router-view>
    
  </router-view>
</template>

<style scoped>
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 1;
  }
  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
    transform: translateX(-30%);
  }
</style>


