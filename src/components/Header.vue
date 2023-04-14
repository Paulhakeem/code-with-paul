<script setup>
import {ref} from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const showMenu = ref(false)
</script>
<template>
  
<div id="app">
  <div class="">
    <div class="bg-blue-800">
      <nav class="flex container mx-auto px-5 py-5">
        <ul class="flex flex-grow space-x-4">
          <li>
            <a
              href="/"
              class="flex items-center space-x-3 text-gray-700 md:mr-5"
              >
              <img src="../assets/LOGO.png" class="w-16 bg-white shadow-md">
                
            </a>
          </li>
        </ul>
        <ul class="flex items-center space-x-5">
          <li class="hidden sm:flex">
            <RouterLink to="/"
              class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
              >Home
            </RouterLink>
              
          </li>
          <li class="hidden sm:flex">
            <RouterLink to="/about"
              class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
              >About
            </RouterLink>
              
          </li>
          <li class="hidden sm:flex">
            <RouterLink to="/service"
              class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
              >Services
            </RouterLink>
              
          </li>
           <li class="hidden sm:flex">
            <RouterLink to="/service"
              class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
              >Website design
            </RouterLink>
          </li>
           <li class="hidden sm:flex">
            <RouterLink to="/service"
              class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
              >Graphic design
            </RouterLink>
          </li>
           <li class="hidden sm:flex">
            <RouterLink to="/service"
              class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
              >Digital Marketing
            </RouterLink>
          </li>
           <li class="hidden sm:flex">
            <RouterLink to="/reach"
              class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
              ><img src="../assets/call.png" class="w-8 animate-bounce">
            </RouterLink>
              
          </li>
        </ul>
        <ul class="flex sm:hidden" @click="showMenu = !showMenu">
          <li>
            <a href="#" class="flex-none absolute right-0 px-5 z-30"
              >
              <p
                class="text-gray-200 font-semibold tracking-wide hover:bg-gray-900 hover:bg-opacity-30 rounded px-2 py-2"
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                  >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
              </p
                >
            </a>
            <div
              class="absolute top-0 right-0 z-10 h-screen w-full bg-black transition"
              :class="{
              'invisible opacity-0': !showMenu,
              'visible opacity-40': showMenu,
              }"
              ></div>
            <div
              class="absolute right-0 z-20 w-full px-5 mt-16 transition"
              :class="{
              'invisible opacity-0': !showMenu,
              'visible opacity-100': showMenu,
              }"
              >
              <ul
                class="flex flex-col bg-gray-100 w-full rounded shadow-md overflow-hidden"
                >
                <li class="flex">
                  <h3 class="flex flex-1 text-gray-600 font-semibold px-5 py-4">
                    Menu
                  </h3>
                </li>
                <li class="flex border-t">
                 <RouterLink to="/"
                    class="flex flex-1 text-lg text-gray-700 hover:bg-gray-200 font-semibold px-8 py-4"
                    >Home
                    </RouterLink>
                </li>
                <li class="flex">
                  <RouterLink to="/about"
                    class="flex flex-1 text-lg text-gray-700 hover:bg-gray-200 font-semibold px-8 py-4"
                    >About
                    </RouterLink>
                </li>
                <li class="flex">
                  <RouterLink to="/service"
                    class="flex flex-1 text-lg text-gray-700 hover:bg-gray-200 font-semibold px-8 py-4"
                    >Services
                    </RouterLink>
                </li>
                <li class="flex">
                  <RouterLink to=""
                    class="flex flex-1 text-lg text-gray-700 hover:bg-gray-200 font-semibold px-8 py-4"
                    >Website design
                    </RouterLink>
                </li>
                <li class="flex">
                  <RouterLink to=""
                    class="flex flex-1 text-lg text-gray-700 hover:bg-gray-200 font-semibold px-8 py-4"
                    >Graphic design
                    </RouterLink>
                </li>
                <li class="flex">
                  <RouterLink to="/service"
                    class="flex flex-1 text-lg text-gray-700 hover:bg-gray-200 font-semibold px-8 py-4"
                    >Digital Marketing
                    </RouterLink>
                </li>
                 <li class="flex">
                  <RouterLink to="/reach"
                    class="flex flex-1 text-lg text-gray-700 hover:bg-gray-200 font-semibold px-8 py-4"
                    >Contact Us
                    </RouterLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>

</template>