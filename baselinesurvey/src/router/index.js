import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import SurveyFrom from '../pages/SurveyFrom.vue';
import SearchView from '../views/SearchView.vue';
import LandingPage from '../pages/LandingPage.vue';
import ParentPage from '../pages/parent.vue';
import ExportDataExcel from '../pages/editpages/exportDataExcel.vue';

const routes = [
  {
    path: '/',
    redirect: '/landingpage'
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
  },
  {
    path: '/landingpage',
    name: 'homepage',
    component : LandingPage
  },
  {
    path: '/parentpage',
    name: 'parentpage',
    component : ParentPage
  },
  {
    path: '/getdata',
    name: 'ExportToExcelPage',
    component : ExportDataExcel
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
