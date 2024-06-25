import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import SurveyFrom from '../pages/SurveyFrom.vue';
import SearchView from '../views/SearchView.vue';
const routes = [
  {
    path: '/',
    redirect: '/search'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/survey',
    name: 'Survey',
    component : SurveyFrom
  },
  {
    path: '/search',
    name: 'Search',
    component : SearchView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
