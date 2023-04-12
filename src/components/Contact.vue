<script setup>
  import { ref } from 'vue'
  import emailjs from '@emailjs/browser'

  const form = ref(null)
  const inputFieldReset = ref(null)

  const sendMail = () => {
        emailjs.sendForm('service_0pre02q', 'template_cmilumo', form.value, 'yz6D6HZgDaZq2vG80')
     .then(() => {
          alert('Message sent!')
          inputFieldReset.value = " "
        }, (error) => {
          alert('Message not sent', error)
        }) 
  return{
    form,
    inputFieldReset,
    sendMail
  }
  }
</script>


<template>
	<section class="py-6 dark:bg-gray-800 dark:text-gray-50 ml-4 mr-4 mt-16 bg-gray-400 rounded-md">
		<div class="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
			<div class="py-6 md:py-0 md:px-6">
				<h1 class="text-2xl font-bold text-blue-800 dark:text-white">Get in touch</h1>
				<p class="pt-2 pb-4">Fill in the form to start a conversation</p>
				<div class="space-y-4">
					<p class="flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
							<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
						</svg>
						<span>Nyali Mombasa</span>
					</p>
					<p class="flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
							<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
						</svg>
						<span>+254 759 732 432</span>
					</p>
					<p class="flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
						<span>Poltechnology01@gmail.com</span>
					</p>
				</div>
			</div>
      
			<form ref="form" @submit.prevent="sendMail" class="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
				<label class="block">
					<span class="mb-1">Full name</span>
					<input type="name" placeholder="Your Name" class="w-full p-3 rounded dark:bg-gray-400 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-800" :value="inputFieldReset" required>
				</label>
				<label class="block">
					<span class="mb-1">Email address</span>
					<input type="email" placeholder="example@you.com" class="w-full p-3 rounded dark:bg-gray-400 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-800" :value="inputFieldReset" required>
				</label>
				<label class="block">
					<span class="mb-1">Message</span>
					<textarea type="message" rows="3" class="w-full p-3 rounded dark:bg-gray-400 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-800" placeholder="Write your message.." :value="inputFieldReset" required></textarea>
				</label>
				<button type="submit" class="self-center px-8 py-3 text-lg rounded w-full bg-blue-800 text-white focus:ring hover:ring focus:ring-opacity-75 dark:text-white focus:ring-violet-400 hover:ring-violet-400 uppercase">Send</button>
			</form>
		</div>
	</section>
  <div class="float-right flex gap-2 pr-4 cursor-pointer">
    <a href="https://wa.link/38fuqe" target="_blank">
  <img src="../assets/whatsapp.svg" class="w-12 m-auto">
       
      </a>
   <button class="overflow-hidden">Chat With Us</button>
    </div>
</template>