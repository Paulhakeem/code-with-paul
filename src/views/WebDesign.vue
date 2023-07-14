<script setup>
  import {ref} from 'vue'
  import { RouterLink, useRouter } from 'vue-router'
  import Footer from '../components/Footer.vue'
  import Header from '../components/Header.vue'
</script>
<template>
  <div>
  <Header/>

  <section class="bg-[url('../src/assets/working.jpg')] bg-scroll bg-cover bg-center pb-28 backdrop-brightness-50 h-48 bg-blend-darken bg-local">
     <div class="text-center m-auto pt-20">
       <h1 class="text-2xl font-bold text-blue-800 uppercase">Web design and development</h1>
     </div>
  </section>



  <div class="grid md:grid-cols-2 my-6 mt-20 gap-2 ml-4 mr-4">
      <div>
       <img src="../assets/web.jpg" class="rounded-md border border-1 border-white">
      </div>
      <div class="rounded-md">
        <div class="">
        <h1 class="text-2xl pl-4 font-sembold tracking-wide pt-4 text-blue-800">
         An Effective Online Presence Is Essential For Any Company.

        </h1>
        <p class="pl-4 text-md pt-4 select-none font-light">
         Your firm should go to the next level with the aid of a fantastic website. It can be used to boost sales, develop brand recognition, sell to your target market, and establish oneself as an authority. If you know what you're doing, a single website can help you do all of that.

</p>
          <p class="pl-4 text-md pt-4 select-none font-light">
         For businesses to grow their consumer base and establish their brands, effective marketing and communication strategies are essential. The Internet serves as the primary information source for the entire planet and has quickly assimilated into the commercial sector. If you want to expand your business and properly place your brand on the market, having a great website is essential.


</p>
          <div class="pl-4 mt-4">
            <button class="mt-4 rounded-md text-blue-800 tracking-wide">>></button>
          </div>
         </div>
      </div>
    </div>

  <div class="text-center pt-4 bg-blue-800 ml-4 mr-4 pb-4 rounded-bl-full rounded-tr-full">
    <p class="select-none font-light text-white text-md">The information on your website conveys who you are, what you have to offer, and why potential clients should work with you.
</p>
    </div>


   <div class="text-center pt-6">
     <h5 class="text-blue-800 text-2xl font-medium tracking-wide selecct-none pt-6">
     Choose Your Website Design Plan
    </h5>
    <p class="text-md pt-4 select-none font-light text-gray-600">
Our plans include email hosting, web hosting, and domain registration.
      </p>
  </div>


  <div class="flex flex-wrap auto-rows-min justify-center gap-12 md:flex-wrap pt-6 gap-12">
    <div class="auto-cols-min text-center w-80 rounded-md pb-6 cursor-pointer border border-1 border-gray-300 hover:bg-gray-300 hover:border hover:border-1 hover:border-gray-300">
     <img src="../assets/gem.png" class="mx-auto w-24 pt-4">
      <h4 class="text-blue-800 text-lg font-bold tracking-wide antialiased pt-6 select-none">
         Basic Website <br> Ksh 20,000/= 
      </h4>
      
     <ul class="space-y-4 select-none mt-4">
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4"> 
    No. of pages 10
         </p>
       </li>
       
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
          Responsive Website
         </p>
       </li>
       
      <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           Small Business & Personal Website
         </p>
       </li>
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']"
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
          Admin Panel
         </p>
       </li>
       
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           Simple & Attractive website
         </p>
       </li>
       
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
          Contact Form
         </p>
       </li>
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           Up to 3 Emails Accounts
         </p>
       </li>

         <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           Foundation - Level Functionality
         </p>
       </li>

        <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           Basic Database Integration
         </p>
       </li>
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           Delivery Period 1 Week
         </p>
       </li>
     </ul>
      <a href="https://wa.link/38fuqe" target="_blank">
      <button class="p-4 mt-6 bg-blue-800 rounded-md text-white uppercase tracking-wider font-semibold hover:bg-gray-300 hover:text-blue-800 hover:border hover:border-1 hover:border-blue-800 cursor-pointer">
        order now
      </button>
        </a>
    </div>


    <div class="auto-cols-min text-center w-80 rounded-md pb-6 cursor-pointer bg-gray-300 hover:bg-white hover:border hover:border-1 hover:border-gray-300">
     <img src="../assets/premium.png" class="mx-auto w-24 pt-4">
      <h4 class="text-blue-800 text-lg font-bold tracking-wide antialiased pt-6 select-none">
        Corporate website <br> Ksh 45,000/= 
      </h4>
      
     <ul class="space-y-4 select-none mt-4">
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4"> 
    No. of pages 30
         </p>
       </li>
       
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           Responsive Website
         </p>
       </li>

       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           Medium Sized Business Website
         </p>
       </li>
       
      <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           Admin Panel
         </p>
       </li>
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']"
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
          High End Design & Styling
         </p>
       </li>
       
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           Contact Form
         </p>
       </li>
       
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           Up to 10 Emails Accounts
         </p>
       </li>
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           Advanced - Level Functionality
         </p>
       </li>

        <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           Advanced Database Integration
         </p>
       </li>

       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           Delivery Period 3 Weeks
         </p>
       </li>
     </ul>
      <a href="https://wa.link/38fuqe" target="_blank">
      <button class="p-4 mt-6 bg-blue-800 rounded-md text-white uppercase tracking-wider font-semibold hover:bg-white hover:text-blue-800 hover:border hover:border-1 hover:border-blue-800 cursor-pointer">
        order now
      </button>
        </a>
    </div>


    <div class="auto-cols-min text-center w-80 rounded-md pb-6 cursor-pointer border border-1 border-gray-300 hover:bg-gray-300 hover:border hover:border-1 hover:border-gray-300">
     <img src="../assets/high-quality.png" class="mx-auto w-24 pt-4">
      <h4 class="text-blue-800 text-lg font-bold tracking-wide antialiased pt-6 select-none">
         E-commerce website<br> Ksh 65,000/= 
      </h4>
      
     <ul class="space-y-4 select-none mt-4">
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4"> 
    Unlimited
         </p>
       </li>
       
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           Responsive Website
         </p>
       </li>
       
       
      <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           Admin Panel
         </p>
       </li>

         <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           High End Design & Styling
         </p>
       </li>
       
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']"
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
          Contact Form
         </p>
       </li>
       
    
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           Unlimited Email Accounts
         </p>
       </li>
       
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           Advanced Database Integration
         </p>
       </li>
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
          Enterprise Level Functionality
         </p>
       </li>

        <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
          Delivery Period 4 Weeks
         </p>
       </li>
     </ul>
      <a href="https://wa.link/38fuqe" target="_blank">
      <button class="p-4 mt-6 bg-blue-800 rounded-md text-white uppercase tracking-wider font-semibold hover:bg-gray-300 hover:text-blue-800 hover:border hover:border-1 hover:border-blue-800 cursor-pointer">
        order now
      </button>
        </a>
    </div>
    </div>
  <Footer/>
  </div>
</template>