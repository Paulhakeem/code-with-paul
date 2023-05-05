<script setup>
  import {ref} from 'vue'
  import { RouterLink, useRouter } from 'vue-router'
  import Footer from '../components/Footer.vue'
  import Header from '../components/Header.vue'
</script>
<template>
  <Header/>
  <section class="bg-[url('../src/assets/social.jpg')] bg-scroll bg-cover bg-center pb-28 backdrop-brightness-50 h-48 bg-blend-darken bg-local">
     <div class="text-center m-auto pt-12">
       <h1 class="text-2xl font-bold text-white uppercase">Social Media Marketing</h1>
     </div>
  </section>

  <div class="grid md:grid-cols-2 my-6 mt-20 gap-2 ml-4 mr-4">
      <div>
       <img src="../assets/md.jpg" class="rounded-md border border-1 border-white">
      </div>
      <div class="mt-24">
        <div class="">
        <h1 class="text-2xl pl-4 font-sembold tracking-wide pt-4 text-blue-800">
          Importance Of Social Media Marketing
        </h1>
        <p class="pl-4 text-md pt-4 select-none font-light">
          Social media has grown to be the most influential and significant virtual space, where the platform is not only used for social networking but also serves as an excellent digital marketing tool for your company and its goods.
        </p>
          <p class="pl-4 text-md pt-4 select-none font-light">
The power of social media is admirable because it enables you to reach a large audience quickly after posting an advertisement, thereby lowering your costs and increasing the reach of your ads to potential customers.
</p>
          <div class="pl-4 mt-4">
            <button class="mt-4 rounded-md text-blue-800 tracking-wide">>></button>
          </div>
         </div>
      </div>
    </div>

  <div class="pt-4 ml-4 mr-4 shadow-md">
    <h1 class="text-2xl pl-4 font-sembold tracking-wide pt-4 text-blue-800 text-center">
  Boost Your Online Presence On Social Media With Us.

    </h1>
    <div>
      <p class="text-md pt-4 select-none font-light text-center ml-2 mr-2">
   Establishing your business goals, identifying your target market, creating interesting and shareable content, and lastly integrating your social media with all other aspects of your online presence are all things that our social media professionals can assist you with. Most internet businesses fail to see the full benefits that social media may offer. In order to raise brand awareness, it can serve as both a lead generator and a fantastic engagement technique. We design our social media marketing campaigns with lead generation and audience retention in mind to make sure that your audience is drawn in to your message and consistently interacting with the brands that can provide them with value.
      </p>
    </div>
  </div>


  <div class="pt-24">
<div class="bg-blue-800 ml-4 mr-4 h-12 rounded md shadow-md shadow-black"></div>
</div>
  <div class="grid md:grid-cols-2 my-6 pt-24 gap-2 ml-4 mr-4">
      <div class="mt-24">
        <div class="">
        <h1 class="text-2xl pl-4 font-sembold tracking-wide text-blue-800">
          Let Us Manage Your Social Media
        </h1>
        <p class="pl-4 text-md pt-4 select-none font-light">
          We will create a social media marketing strategy that is uniquely designed for your brand and target demographic. In addition to other services designed to draw in more clients and boost your profitability, you will receive fully supported and managed social media campaigns, content planning, and blogger outreach. Our social media services provide the ability to connect and share information, increasing the awareness of a brand's goods or services. The quantity of comments, links, views, and shares reflects the effectiveness of social media advertising. Social media marketing promotes user-generated content from the most prominent social media platforms, such as Facebook and Instagram.

        </p>
          <div class="pl-4 mt-4">
            <button class="mt-4 rounded-md text-blue-800 tracking-wide">>></button>
          </div>
         </div>
      </div>
    <img src="../assets/let.jpg" class="rounded-md border border-1 border-white">
    </div>


   <div class="text-2xl pl-4 font-sembold tracking-wide pt-4 text-blue-800 text-center select-none">
      <h3>Why Social Media Marketing</h3>
    </div>
  <div class="flex flex-wrap auto-rows-min justify-center gap-12 md:flex-wrap pt-6 gap-12">
    <div class="auto-cols-min bg-gray-300 text-center w-80 rounded-md pb-6 cursor-pointer hover:bg-white hover:border hover:border-1 hover:border-gray-400">
     <img src="../assets/agreement.png" class="mx-auto w-24 pt-4">
      <h4 class="text-blue-800 text-lg font-bold tracking-wide antialiased pt-6 select-none">
        Build relationship <br> (Engagement) 
      </h4>
      
     <p class="mr-2 ml-2 select-none">
      Your audience is more likely to make a purchase from you when you establish a deep relationship with them through involvement. We will work with you to improve social media post engagement, such as likes and comments. The more engagement you have, the stronger the connection is with your audience.
     </p>
    </div>

     <div class="auto-cols-min bg-gray-300 text-center w-80 rounded-md pb-6 cursor-pointer hover:bg-white hover:border hover:border-1 hover:border-gray-400">
      <img src="../assets/productivity.png" class="mx-auto w-24 pt-4">
      <h4 class="text-blue-800 text-lg font-bold tracking-wide antialiased pt-6 select-none">
        Increasing Website Exposure <br> (Traffic and Coversation) 
      </h4>
      
     <p class="mr-2 ml-2 select-none">
      Gaining more website visitors will have a direct impact on leads and sales. This service is therefore best used in conjunction with our social media advertising services, where we concentrate on creating social media advertising campaigns that provide a lot of traffic to your website.

     </p>
    </div>

     <div class="auto-cols-min bg-gray-300 text-center w-80 rounded-md pb-6 cursor-pointer hover:bg-white hover:border hover:border-1 hover:border-gray-400">
      <img src="../assets/followers.png" 
      class="mx-auto w-24 pt-4">
      <h4 class="text-blue-800 text-lg font-bold tracking-wide antialiased pt-6 select-none">
         Develop Brand Awareness <br> (Followers) 
      </h4>
      
     <p class="mr-2 ml-2 select-none">
      You may increase your referrals by growing your social media following. Our social media marketing services will help you gain more relevant followers. We'll make sure your followers reflect the characteristics, interests, and actions of your usual customers.
     </p>
    </div>
  </div>



  <div class="text-2xl pl-4 font-sembold tracking-wide pt-4 text-blue-800 text-center select-none mt-14">
      <h3>Social Media Marketing Monthly Cost</h3>
    </div>
  <div class="flex flex-wrap auto-rows-min justify-center gap-12 md:flex-wrap pt-6 gap-12">
    <div class="auto-cols-min text-center w-80 rounded-md pb-6 cursor-pointer border border-1 border-gray-400 hover:zoom-in">
     <img src="../assets/gem.png" class="mx-auto w-24 pt-4">
      <h4 class="text-blue-800 text-lg font-bold tracking-wide antialiased pt-6 select-none">
         Basic Monthly Package <br> Ksh 13,000/= 
      </h4>
      
     <ul class="space-y-4 select-none mt-4">
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           Ksh 1,000 - 5,000 social media ads
         </p>
       </li>
       
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           2 Social media platforms
         </p>
       </li>
       
      <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">15 posters per month</p>
       </li>
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']"
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           4 post boost
         </p>
       </li>
       
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           Monthly report and analysis</p>
       </li>
       
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           Content creation and planning
         </p>
       </li>
       <li class="flex text-md font-light space-x-2 pl-2">
         <font-awesome-icon 
           :icon="['fas', 'circle-check']" 
           style="color: #084fc9;" class="w-6"/>
         <p class="pr-4">
           Analyze performance/report
         </p>
       </li>
     </ul>
      <a href="https://wa.link/38fuqe" target="_blank">
      <button class="p-4 mt-6 bg-blue-800 rounded-md text-white uppercase tracking-wider font-semibold hover:bg-white hover:text-blue-800 hover:border hover:border-1 hover:border-blue-800 cursor-pointer">
        get started
      </button>
        </a>
    </div>
  </div>
  <Footer/>
</template>