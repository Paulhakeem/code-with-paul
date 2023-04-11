<script setup>
  import {ref} from 'vue'
  import { RouterLink, useRouter } from 'vue-router'
  import Contact from '../components/Contact.vue'
  import Footer from '../components/Footer.vue'
</script>

<template>
  <header class="bg-white flex justify-between items-center text-center m-auto shadow-gray shadow-lg pr-2 sticky top-0 z-50">
    <div class="pr-4">
  <img src="../assets/LOGO.png" class="h-20 w-20 ml-4 rounded-full">
      </div>
    <div>
      <RouterLink to="/">
      <button class="tracking-wide text-md antialiased hover:bg-blue-800 hover:text-white p-2 rounded-md">Home</button>
        </RouterLink>
      </div>
     <div>
       <RouterLink to="/about">
      <button class="tracking-wide text-md antialiased hover:bg-blue-800 hover:text-white p-2 rounded-md">About</button>
         </RouterLink>
      </div>
     <div>
       <RouterLink to="/service">
      <button class="tracking-wide  text-md antialiased hover:bg-blue-800 hover:text-white p-2 rounded-md">Services</button>
        </RouterLink>
      </div>
     <div>
       <RouterLink to="/reach">
      <button class="tracking-wide text-md antialiased hover:bg-blue-800 hover:text-white p-2 rounded-md">Contact</button>
         </RouterLink>
      </div>
  </header>

  <section class="bg-[url('../src/assets/working.jpg')] bg-scroll bg-cover bg-center pb-28 backdrop-brightness-50 h-48 bg-blend-darken bg-local">
     <div class="text-center m-auto pt-20">
       <h1 class="text-2xl font-bold text-blue-800 uppercase">Contact us</h1>
     </div>
  </section>

  <Contact/>
  <Footer/>
</template>