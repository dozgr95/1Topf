import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/easy',
    name: 'EasyRecipe',
    component: () => import('../views/EasyRecipe.vue'),
  },
  {
    path: '/advanced',
    name: 'AdvancedRecipe',
    component: () => import('../views/AdvancedRecipe.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
