<script setup>
  import {ref} from 'vue'
  import { RouterLink, useRouter } from 'vue-router'
  import Header from '../components/Header.vue'
  import Services from '../components/Services.vue'
  import Footer from '../components/Footer.vue'
</script>

<template>
  
  <Header/>



  <section class="bg-[url('../src/assets/office.jpg')] bg-scroll bg-cover bg-center pb-28 backdrop-brightness-50 h-48 bg-blend-darken bg-local">
    <div class="text-center m-auto pt-20">
       <h1 class="text-2xl font-bold text-white uppercase">Our Services</h1>
     </div>
  </section>
  <Services/>
  <Footer/>
</template>