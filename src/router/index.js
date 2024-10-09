import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tablazat',
      name: 'Táblázat',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/KarakterekTablazat.vue'),
      meta: { title: "Táblázat"}
    },
    {
      path: '/kartyak',
      name: 'Kártyák',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/KarakterekKartya.vue'),
      meta: { title: "Kártyák"}
    },
  ]
})
router.beforeEach((to, from, next) =>{
  document.title= to.meta.title ? `${to.meta.title}` : 'Karakterek';
  next();
})
export default router
