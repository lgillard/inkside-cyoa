import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/ui/views/HomeView.vue";
import LoginView from "@/ui/views/LoginView.vue";
import LibraryView from "@/ui/views/LibraryView.vue";
import CreateGamebookView from "@/ui/views/CreateGamebookView.vue";
import EditGamebookView from "@/ui/views/EditGamebookView.vue";
import CreateSectionView from "@/ui/views/CreateSectionView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/library',
      name: 'library',
      component: LibraryView,
    },
    {
      path: '/gamebook/new',
      name: 'new-gamebook',
      component: CreateGamebookView,
    },
    {
      path: '/gamebook/:gamebookId',
      name: 'edit-gamebook',
      component: EditGamebookView,
    },
    {
      path: '/gamebook/:gamebookId/section/new',
      name: 'new-section',
      component: CreateSectionView,
    },
  ],
})

export default router
