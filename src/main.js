import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'


// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas, far)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', 
         name: 'Home',
         component: () => 
        import( './views/HelloWorld.vue')},
      
      {path: '/about',
       name: 'About', 
       component: () => 
      import('./views/About.vue')},
      
      {path: '/logo', 
       name: 'Logo-design',
       component: () => 
      import('./views/LogoDesign.vue')},
      
       {path: '/reach', 
        name: 'Reach-Us',
        component: () => 
        import('./views/ReachUs.vue')},
      
      {path: '/web', 
       name: 'Website-design',
       component:  () => 
        import('./views/WebDesign.vue')},
      
      {path: '/graphs',
       name: 'Graphic-design',
       component:  () => 
      import('./views/Graphic.vue')},
      
      {path: '/media', 
       name:'social-mediam-marketing',
       component: () => 
      import('./views/Marketing.vue')
      }
    ],
    scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})





createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
