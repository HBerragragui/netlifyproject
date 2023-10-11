import { createRouter, createWebHistory } from 'vue-router'
import Test from "../views/Test.vue";
import Home from "../views/Home.vue";
import Favoris from "../views/Favoris.vue";
import Details from "../views/Details.vue";
import Profil from "../views/Profil.vue";

import { createAuthGuard } from "@auth0/auth0-vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path :'/Test',
      name:'test',
      component: Test
    },
    {
      path :'/',
      name:'Home',
      component: Home
    },
    {
      path :'/Favoris',
      name:'Favoris',
      component: Favoris
    },
    {
      path :'/Details/:id',
      name:'Detais',
      component: Details
    },
    {
      path :'/Profile',
      name:'Profile',
      component: Profil,
      beforeEnter: createAuthGuard(app)
    }
  ]
})

export default router
