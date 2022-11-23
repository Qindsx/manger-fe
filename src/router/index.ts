import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    name: 'layout',
    path: '/',
    component: () => import('../view/layout.vue'),
  },
];

const router = createRouter({ history: createWebHashHistory(), routes });
export default router;
