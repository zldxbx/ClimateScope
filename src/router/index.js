import { createRouter, createWebHistory } from 'vue-router';
import AdminLogin from '../components/AdminLogin.vue';
import AdminRegister from '../components/AdminRegister.vue';
import QueryPage from '../components/QueryPage.vue';
import TouristQueryPage from '../components/TouristQueryPage.vue';
import Retrieval from '../components/Retrieval.vue';

const routes = [
  {
    path: '/',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/QueryPage',
    name: 'QueryPage',
    component: QueryPage
  },
  {
    path: '/Retrieval',
    name: 'Retrieval',
    component: Retrieval
  },
  {
    path: '/TouristQueryPage',
    name: 'TouristQueryPage',
    component: TouristQueryPage
  },
  {
    path: '/AdminRegister', // 定义注册页面的路由
    name: 'AdminRegister',
    component: AdminRegister
  },
  // 其他路由...
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
