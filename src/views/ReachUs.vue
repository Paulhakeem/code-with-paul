<script setup>
  import {ref} from 'vue'
  import { RouterLink, useRouter } from 'vue-router'
  import Contact from '../components/Contact.vue'
  import Footer from '../components/Footer.vue'
  import Header from '../components/Header.vue'
</script>

<template>
  <Header/>

  <section class="bg-[url('../src/assets/working.jpg')] bg-scroll bg-cover bg-center pb-28 backdrop-brightness-50 h-48 bg-blend-darken bg-local">
     <div class="text-center m-auto pt-20">
       <h1 class="text-2xl font-bold text-blue-800 uppercase">Contact us</h1>
     </div>
  </section>

  <Contact/>
  <Footer/>
</template>