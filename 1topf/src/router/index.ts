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
    path: '/random',
    name: 'random',
    component: () => import('../views/Random.vue'),
  },
  {
    path: '/creator',
    name: 'creator',
    component: () => import('../views/Creator.vue'),
  },
  {
    path: '/best-list',
    name: 'best-list',
    component: () => import('../views/BestList.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
