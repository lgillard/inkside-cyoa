import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/ui/views/HomeView.vue";
import LoginView from "@/ui/views/LoginView.vue";
import LibraryView from "@/ui/views/LibraryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
})

export default router
