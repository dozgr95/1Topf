import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/start',
    name: 'start',
    component: () => import('../views/StartRecipe.vue'),
  },
  {
    path: '/cooking',
    name: 'cooking',
    component: () => import('../views/Cooking.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
