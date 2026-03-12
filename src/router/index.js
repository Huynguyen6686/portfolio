import { createRouter, createWebHistory } from 'vue-router';
import About from "../components/about.vue";
import Contact from "../components/contact.vue";
import Portfolio from "../components/portfolio.vue";
import Resume from "../components/resume.vue";




const routes = [
  { path: '/', component: About },
  { path: '/resume', component: Resume },
  { path: '/portfolio', component: Portfolio },
  { path: '/contact', component: Contact }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active text-warning' 
});

export default router;