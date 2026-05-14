import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/mainPage.vue';
import PopularView from '../views/popularPage.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/popular',
    name: 'popular',
    component: PopularView,
  },
];
const router = createRouter({history: createWebHistory(),routes,});
export default router;