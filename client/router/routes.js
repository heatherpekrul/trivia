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
    ],
  },
];