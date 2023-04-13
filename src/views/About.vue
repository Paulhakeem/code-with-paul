<script setup>
  import {ref} from 'vue'
  import { RouterLink, useRouter } from 'vue-router'
  import Footer from '../components/Footer.vue'
  import Header from '../components/Header.vue'
</script>

<template>
<Header/>
  <section class="bg-[url('../src/assets/working.jpg')] bg-scroll bg-cover bg-center pb-28 backdrop-brightness-50 h-48 bg-blend-darken bg-local">
     <div class="text-center m-auto pt-12">
       <h1 class="text-2xl font-bold text-blue-800 uppercase">About us</h1>
     </div>
  </section>

   <div class="grid md:grid-cols-2 my-6 mt-20 gap-2 ml-4 mr-4">
      <div>
       <img src="../assets/us.jpg" class="rounded-md border border-1 border-white">
      </div>
      <div class="rounded-md shadow-lg">
        <div class="">
        <h1 class="text-2xl pl-4 font-sembold tracking-wide pt-4 text-blue-800">About our company</h1>
        <p class="pl-4 text-md pt-4 select-none font-light">Incepted in 2022, Pol Technologies (Code With Paul) is a leading Development & Design expert company providing superior Graphics Design, Web Design, and Creative Designing solutions and services to companies. Having strong Technology Development and Innovation personnel and a range of satisfied clients ranging from startups – to fortune companies across diverse industries, Pol Technology (PT) has made its mark as a well-established and sound company driven by the industry’s highly professional and trained individuals and is surely headed in becoming a leading organization which facilitates, enhances and provides measurable business value to customers through most effective uses of technology and Resources to organizations.
</p>
          <div class="pl-4 mt-4">
            <button class="mt-4 rounded-md text-blue-800 tracking-wide">>></button>
          </div>
         </div>
      </div>
    </div>
<div class="pt-24">
<div class="bg-blue-800 pt-16 ml-4 mr-4 h-12 rounded md shadow-md shadow-black"></div>
</div>
  <div class="grid md:grid-cols-2 my-6 pt-24 gap-2 ml-4 mr-4">
      <div class="rounded-md shadow-lg">
        <div class="">
        <h1 class="text-2xl pl-4 font-sembold tracking-wide pt-4 text-blue-800">More about our company</h1>
        <p class="pl-4 text-md pt-4 select-none font-light">Highly skilled intellectual personnel, most having substantial work experience in diverse areas of Information Technology make up our team. Our management ensures that each individual excels in their specific assigned tasks by working closely with them. Only those individuals are hired who not only possess strong technical and analytical skills, high intellect, sound work ethics, and integrity but also who have confidence, decision-making abilities, and above all the drive to excel whether it is at the management level or at a technology/software development position.</p>
          <div class="pl-4 mt-4">
            <button class="mt-4 rounded-md text-blue-800 tracking-wide">>></button>
          </div>
         </div>
      </div>
    <img src="../assets/more.jpg" class="rounded-md border border-1 border-white">
    </div>


  <div class="bg-gray-400 mr-4 ml-4 rounded-mg mt-20 pb-4 dark:bg-gray-800 shadow-gray shadow-md">
    <div class="flex items-center justify-center space-x-2 my-4 pt-12">
    <div class="w-16 h-[2px] bg-blue-800 dark:bg-white"></div>
        <h4 class="shrink-0 text-blue-800 font-semibold text-xl tracking-wide subpixel-antialiased dark:text-white">Who We Are</h4>
      <div class="w-16 h-[2px] bg-blue-800 dark:bg-white"></div>
      </div>
 <div class="text-center">
   <div class="pt-4 mr-2 ml-2">
     <p class="text-md select-none font-light dark:text-white">Our focused, sound and innovative approach is derived from the cumulative experience of our team members and as a result of their combined practical business experience with strong technology delivery capabilities, we are able to comprehend the Client’s business requirements, propose IT and Creative strategies in line with the vision of the business and execute the business plan by building or implementing high-quality scalable business solutions through the use of latest cutting edge Technologies.
</p>
     </div>
 </div>
 </div>
    <Footer/>
</template>