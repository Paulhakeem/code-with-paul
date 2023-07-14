<script setup>
  import {ref} from 'vue'
  import { RouterLink, useRouter } from 'vue-router'
  import Header from '../components/Header.vue'
  import Logo from '../components/Logo.vue'
  import Footer from '../components/Footer.vue'
</script>

<template>
  <div>
  <Header/>



  <section class="bg-[url('../src/assets/bg.jpg')] bg-scroll bg-cover bg-center pb-28 backdrop-brightness-50 h-64 bg-blend-darken bg-local">
    <div class="text-center m-auto pt-28">
       <h1 class="text-2xl font-bold text-blue-800 uppercase">high quality logo design</h1>
     </div>
  </section>
<Logo/>
  <Footer/>
    </div>
</template>