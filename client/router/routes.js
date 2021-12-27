export default [
  {
    path: '/',
    component: {
      render(c) { return c('router-view'); },
    },
    children: [
      {
        path: '',
        name: 'DashboardView',
        component: () => import(
          /* webpackChunkName: "dashboard" */ '../views/DashboardView/index.vue'
        ),
      },
      {
        path: '/login',
        name: 'LoginView',
        component: () => import (
          /* webpackChunkName: "login" */ '../views/LoginView/index.vue'
        ),
      }
    ],
  },
];