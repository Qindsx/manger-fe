import { createRouter, createWebHashHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';

const routes = [
  {
    name: 'layout',
    path: '/',
    component: () => import('../view/layout.vue'),
  },
];

const router = createRouter({ history: createWebHashHistory(), routes });
export default router;
