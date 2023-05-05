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
        import(/* webpackChunkName: "Home" */ './views/HelloWorld.vue')},
      
      {path: '/about',
       name: 'About', 
       component: () => 
      import(/* webpackChunkName: About" */ './views/About.vue')},
      
      {path: '/logo', 
       name: 'Logo-design',
       component: () => 
      import(/* webpackChunkName: "Logo-design" */ './views/LogoDesign.vue')},
      
       {path: '/reach', 
        name: 'Reach-Us',
        component: () => 
        import(/* webpackChunkName: "Reach-Us" */ './views/ReachUs.vue')},
      
      {path: '/web', 
       name: 'Website-design',
       component:  () => 
        import(/* webpackChunkName: "Website-design" */ './views/WebDesign.vue')},
      
      {path: '/graphs',
       name: 'Graphic-design', 
       component:  () => 
      import(/* webpackChunkName: "Graphic-design" */ './views/Graphic.vue')},
      
      {path: '/media', 
       name:'social-mediam-marketing', 
       component: () => 
      import(/* webpackChunkName: "social-mediam-marketing" */ './views/Marketing.vue')
      }
    ]
})





createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
