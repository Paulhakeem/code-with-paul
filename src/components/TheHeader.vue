<script setup>
import {ref} from 'vue'
import { RouterLink, useRouter } from 'vue-router'
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

  <section class="bg-[url('../src/assets/working.jpg')] bg-scroll bg-cover bg-center pb-28 backdrop-brightness-50">

    <div class="grid md:grid-cols-2 my-6 gap-2 pt-28 ml-4 mr-4">
      <div>
       <img src="../assets/work.jpg" class="rounded-md border border-1 border-white">
      </div>
      <div class="bg-blue-800 rounded-md">
        <div class="mt-16">
        <h1 class="text-4xl pl-4 font-sembold tracking-wide pt-4 text-white">Welcome To The Home Of Designers!!</h1>
        <p class="pl-4 text-white text-md pt-4 select-none">We are the best designer when it comes to website and graphics. We design high quality and eye-catching designs. We are here for you let us know what you need and we will deliver it on time.</p>
          <div class="pl-4 mt-4">
            <RouterLink to="/reach">
            <button class="mt-4 p-2 bg-white rounded-md text-blue-800 tracking-wide cursor-ponter hover:shadow-lg">Contact Us >></button>
              </RouterLink>
          </div>
         </div>
         <div class="font-medium pt-4 ml-4 mr-4">
          
        </div>
      </div>
    </div>
    </section>

  <div class="grid md:grid-cols-2 my-6 gap-2 ml-4 mr-4 mt-20">
    <div class="pt-10">
    <h1 class="text-blue-800 font-semibold text-xl tracking-wide"> Who We Are </h1>
    <p class="pt-4 decoration-2 antialiased select-none">Incepted in 2022, Pol Technologies (Code With Paul) is a leading Development & Design expert company providing superior Graphics Design, Web Design, and Creative Designing solutions and services to companies. Having strong Technology Development and Innovation personnel and a range of satisfied clients ranging from startups – to fortune companies across diverse industries, Pol Technology (PT) has made its mark as a well-established and sound company driven by the industry’s highly professional and trained individuals and is surely headed in becoming a leading organization which facilitates, enhances and provides measurable business value to customers through most effective uses of technology and Resources to organizations</p>
      <RouterLink to="/about">
      <button class="mt-4 p-2 bg-blue-800 rounded-md text-white tracking-wide cursor-ponter mb-2 hover:shadow-lg"> Read More >> </button>
        </RouterLink>
    </div>
    <div>
    <img src="../assets/about.jpg" class="rounded-md">
    </div>
  </div>

  <div class="bg-blue-800 mt-20 text-center pb-4 ml-4 mr-4">
  <div class="text-white mr-4 ml-4">
    <h3 class="font-semibold text-xl tracking-wide pt-4 antialiased">Our Mission</h3>
     <p class="pt-2 antialiased select-none">Our mission is to exceed our customer’s expectations in the form of value, quality, and complete customer satisfaction.</p>
  </div>
  </div>

  
      <div class="pt-20 m-auto text-center text-xl font-semibold text-blue-800">
      <h3>Our Services</h3>
        </div>
 <div class="flex flex-wrap auto-rows-min justify-center gap-4 md:flex-wrap pt-12 gap-12">
   <div class="auto-cols-min bg-gray-300 text-center w-80 rounded-md pb-6 cursor-pointer hover:bg-white hover:border hover:border-1 hover:border-gray-400">
     <div class="flex gap-4">
     <img src="../assets/website.png" class="w-20 h-20 pl-2 pt-2 pb-2">
      <h4 class="text-blue-800 font-semibold tracking-wide antialiased pt-6">Website Design</h4>
       </div>
     <p class="mr-2 ml-2 select-none">We create websites that are appealing and responsive across all platforms. A website that looks great and will assist you in achieving the company goals you have set.</p>
    </div>
   <div class="auto-cols-min bg-gray-300 text-center w-80 rounded-md pb-6 cursor-pointer hover:bg-white hover:border hover:border-1 hover:border-gray-400">
     <div class="flex gap-4">
       <img src="../assets/logo1.png" class="w-20 h-20 pl-2 pt-2 pb-2">
      <h4 class="text-blue-800 font-semibold tracking-wide antialiased pt-6">Logo design</h4>
       </div>
     <p class="mr-2 ml-2 select-none">We create a logo that is appealing to all viewers, instantly identifiable, and distinctive.</p>
    </div>
   <div class="auto-cols-min bg-gray-300 text-center w-80 rounded-md pb-6 cursor-pointer hover:bg-white hover:border hover:border-1 hover:border-gray-400">
     <div class="flex gap-4">
     <img src="../assets/business.png" class="w-20 h-20 pl-2 pt-2 pb-2">
      <h4 class="text-blue-800 font-semibold tracking-wide antialiased pt-6">Flyer Design</h4>
       </div>
     <p class="mr-2 ml-2 select-none">You can provide services to customers at their doorsteps with the use of flyers. They are appropriate for all business types and will enable you to effectively achieve your advertising objectives.</p>
    </div>
   <div class="auto-cols-min bg-gray-300 text-center w-80 rounded-md pb-6 cursor-pointer hover:bg-white hover:border hover:border-1 hover:border-gray-400">
      <div class="flex gap-4">
     <img src="../assets/brochure.png" class="w-20 h-20 pl-2 pt-2 pb-2">
      <h4 class="text-blue-800 font-semibold tracking-wide antialiased pt-6">Brochure Design</h4>
      </div>
     <p class="mr-2 ml-2 select-none">Any type of business can use brochures as a marketing tool to spread the word.
In contrast to flyers, a brochure is like a book in form.</p>
    </div>
   <div class="auto-cols-min bg-gray-300 text-center w-80 rounded-md cursor-pointer pb-6 hover:bg-white hover:border hover:border-1 hover:border-gray-400">
     <div class="flex gap-4">
     <img src="../assets/card.png" class="w-20 h-20 pl-2">
      <h4 class="text-blue-800 font-semibold tracking-wide antialiased pt-6">Business card Design</h4>
        </div>
     <p class="mr-2 ml-2 select-none">Business cards include information about you and the organization you work for. If you have a business card, you can use it to introduce yourself to people so they can get in touch with you and learn more about what you do, which will bring in clients.</p>
    </div>
   <div class="auto-cols-min bg-gray-300 text-center w-80 rounded-md cursor-pointer pb-6 hover:bg-white hover:border hover:border-1 hover:border-gray-400">
      <div class="flex gap-4">
     <img src="../assets/banner.png" class="w-20 h-20 pl-2">
      <h4 class="text-blue-800 font-semibold tracking-wide antialiased pt-6">Roll-up banner Design</h4>
      </div>
     <p class="mr-2 ml-2 select-none">Roll-up banners are a common marketing tool used by businesses to draw in clients. And it will continue to be one of the most successful ways to draw customers.</p>
    </div>
   </div>


   <div class="flex items-center justify-center space-x-2 my-4 pt-12">
    <div class="w-16 h-[2px] bg-blue-800"></div>
        <h4 class="shrink-0 text-blue-800 font-semibold text-xl tracking-wide subpixel-antialiased">Testmonials</h4>
      <div class="w-16 h-[2px] bg-blue-800 "></div>
    </div>
  <div class="text-center">
  <p class="font-medium text-gray-600 tracking-wide text-xl subpixel-antialiased">What Cliets Say About Us</p>
  </div>
  <div class="flex flex-wrap auto-rows-min justify-center gap-4 md:flex-wrap pt-12 space-x-12">
    <div class="auto-cols-min border border-1 border-gray-500 text-center w-72 rounded-md pb-6 cursor-pointer hover:bg-gray-400 hover:border-0">
      <div class="rounded-lg">
      <img src="../assets/woman.jpg" class="mx-auto w-36 pt-4 shadow-lg rounded-bl-full rounded-r-full">
        <div class="pt-4">
        <span class="text-blue-800 font-medium subpixel-antialiased">Linna Rashid </span>
          </div>
        <p class="font-light italic subpixel-antialiased select-none">"Since Pol Tech designed our new website, we've noticed a 100% increase in the quantity of online contact forms that people have filled out and submitted to us. Paul and his colleagues collaborated extensively with us to develop a website that satisfied all of our requirements. An appealing, well-organized, and successful website was the ultimate result. I appreciate Pol Tech's efforts and assistance."</p>
        </div>
      <div class="flex pt-4 ml-2 mr-2">
        <img src="../assets/star.png" class="w-6 mx-auto">
        <img src="../assets/star.png" class="w-6 mx-auto">
        <img src="../assets/star.png" class="w-6 mx-auto">
        <img src="../assets/star.png" class="w-6 mx-auto">
        <img src="../assets/star.png" class="w-6 mx-auto">
      </div>
      <p class="font-light italic text-md pt-2 ml-2 mr-2"><span class="text-blue-800 font-bold">CEO</span> at QP fashion and design</p>
      </div>

    <div class="auto-cols-min border border-1 border-gray-500 text-center w-72 rounded-md pb-6 cursor-pointer hover:bg-gray-400 hover:border-0">
      <div class="rounded-lg">
      <img src="../assets/men.jpg" class="mx-auto w-36 pt-4 shadow-lg rounded-bl-full rounded-r-full">
        <div class="pt-4">
        <span class="text-blue-800 font-medium subpixel-antialiased">Samson Nyamawi</span>
          </div>
        <p class="font-light italic subpixel-antialiased select-none"> "I heartily endorse Pol tech Online Marketing. Working with them is a pleasure. Thanks to their SEO technique, our website's traffic has increased."</p>
        </div>
      <div class="flex pt-4 ml-2 mr-2">
        <img src="../assets/star.png" class="w-6 mx-auto">
        <img src="../assets/star.png" class="w-6 mx-auto">
        <img src="../assets/star.png" class="w-6 mx-auto">
        <img src="../assets/star.png" class="w-6 mx-auto">
        <img src="../assets/star.png" class="w-6 mx-auto">
      </div>
      <p class="font-light italic text-md pt-2 ml-2 mr-2"><span class="text-blue-800 font-bold">Manager</span> at My holiday deals company</p>
      </div>

    <div class="auto-cols-min border border-1 border-gray-500 text-center w-72 rounded-md pb-6 cursor-pointer hover:bg-gray-400 hover:border-0">
      <div class="rounded-lg">
      <img src="../assets/women.jpg" class="mx-auto w-36 pt-4 shadow-lg rounded-bl-full rounded-r-full">
        <div class="pt-4">
        <span class="text-blue-800 font-medium subpixel-antialiased">Rachael Mumbe</span>
          </div>
        <p class="font-light italic subpixel-antialiased select-none">"Throughout an 8 month period, we underwent two website redesigns. The original company and Pol Tech were not comparable. Competent, original, meticulous, and excellent communicator... I would not have needed to contract with Pol Tech twice if I had done it the first time."</p>
        </div>
      <div class="flex pt-4 ml-2 mr-2">
        <img src="../assets/star.png" class="w-6 mx-auto">
        <img src="../assets/star.png" class="w-6 mx-auto">
        <img src="../assets/star.png" class="w-6 mx-auto">
        <img src="../assets/star.png" class="w-6 mx-auto">
        <img src="../assets/star.png" class="w-6 mx-auto">
      </div>
      <p class="font-light italic text-md pt-2 ml-2 mr-2"><span class="text-blue-800 font-bold">Working</span> at LK Bakery</p>
      </div>
    </div>
</template>

