import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    name: 'layout',
    path: '/',
    redirect: '/home',
    component: () => import('../view/layout.vue'),
    children: [
      {
        name: 'home',
        path: '/home',
        component: () => import('../view/Home.vue'),
      },
    ],
  },
  {
    name: 'login',
    path: '/login',
    meta: {
      title: '登录',
    },
    component: () => import('../view/Login.vue'),
  },
];

const router = createRouter({ history: createWebHashHistory(), routes });
export default router;
