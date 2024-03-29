import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView';
import AboutView from '@/views/AboutView';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
