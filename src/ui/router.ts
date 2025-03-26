import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/ui/views/HomeView.vue";
import LoginView from "@/ui/views/LoginView.vue";
import LibraryView from "@/ui/views/LibraryView.vue";
import CreateGamebookView from "@/ui/views/CreateGamebookView.vue";
import EditGamebookView from "@/ui/views/EditGamebookView.vue";
import SectionFormView from "@/ui/views/SectionFormView.vue";

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
      path: '/gamebook/:gamebookId/section/:sectionId',
      name: 'new-section',
      component: SectionFormView,
    },
  ],
})

export default router
