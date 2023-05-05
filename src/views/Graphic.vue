<script setup>
  import {ref} from 'vue'
  import { RouterLink, useRouter } from 'vue-router'
  import Footer from '../components/Footer.vue'
  import Header from '../components/Header.vue'
  import Graphics from '../components/Graphics.vue'
</script>
<template>
  <Header/>

  <section 
  class="bg-[url('../src/assets/flyer.jpg')] bg-scroll bg-cover bg-center pb-28 backdrop-brightness-50 h-62 bg-blend-darken bg-local">
    <div 
      class="text-center m-auto pt-20">
       <h1 
      class="text-2xl font-bold text-white shadow-lg uppercase">
        Graphic design
       </h1>
     </div>
    </section>


  <div class="grid md:grid-cols-2 my-6 gap-2 ml-4 mr-4 mt-6">
      <div class="mt-24">
        <div class="">
        <h1 class="text-2xl pl-4 font-sembold tracking-wide text-blue-800">
          Benefits Of Graphic Design In Your Company
        </h1>
        <p class="pl-4 text-md pt-4 select-none font-light">
          A company's visibility will grow with good graphic design, and this could result in more sales. Attractive aesthetics, efficient concept transmission, increased visibility, and increased credibility drive traffic to your brand. More opportunities result from more traffic.

        </p>
          <p class="pl-4 text-md pt-4 select-none font-light">
         Using graphics for marketing purposes has the advantage of grabbing viewers' attention. The curiosity of your readers or audience members can be aroused more readily and led to read your post, blog, article, or commercial if you use graphics in your material.


        </p>
          <div class="pl-4 mt-4">
            <button class="mt-4 rounded-md text-blue-800 tracking-wide">>></button>
          </div>
         </div>
      </div>
    <img src="../assets/graphs.jpg" class="rounded-md border border-1 border-white">
    </div>


  

    <Graphics/>
  <Footer/>
</template>