import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/HelloWorld.vue'
import About from './views/About.vue'
import Service from './views/Service.vue'
import ReachUs from './views/ReachUs.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
      {path: '/about', name: 'About', component: About},
      {path: '/service', name: 'Service', component: Service},
       {path: '/reach', name: 'ReachUs', component: ReachUs}
    ]
})

createApp(App)
    .use(router)
    .mount('#app')
