<script setup>
import {ref} from 'vue'
import { RouterLink, useRouter } from 'vue-router'
</script>
<template>
  
<header class="bg-white border-gray-200 dark:border-gray-700 shadow-md">
  <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
    <img src="../assets/LOGO.png" class="w-16 shadow-md">
    <ul class="flex">
      <RouterLink to="/">
      <li class="text-blue-800 font-medium text-md tracking-wide hover:bg-blue-800 hover:text-white p-2 rounded-md cursor-pointer">Home</li>
        </RouterLink>
        <RouterLink to="/about">
      <li class="text-blue-800 font-medium text-md tracking-wide hover:bg-blue-800 hover:text-white p-2 rounded-md cursor-pointer">About</li>
          </RouterLink>
        <RouterLink to='/service'>
      <li class="text-blue-800 font-medium text-md tracking-wide hover:bg-blue-800 hover:text-white p-2 rounded-md cursor-pointer">Service</li>
          </RouterLink>
        <RouterLink to="/reach">
      <li class="text-blue-800 font-medium text-md tracking-wide hover:shadow-md p-2 rounded-md cursor-pointer">
        <img src="../assets/call.png" class="w-8">
      </li>
        </RouterLink>
    </ul>
   </div>
</header>

</template>