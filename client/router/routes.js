import store from '../store';

export default [
  {
    path: '/',
    component: {
      render(c) { return c('router-view'); },
    },
    children: [
      {
        path: '/',
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
      },
      {
        path: '/present/:id',
        name: 'GamePresentationView',
        component: () => import (
          /* webpackChunkName: "present" */ '../views/GamePresentationView/index.vue'
        ),
        beforeEnter: async (to, from, next) => {
          await store.dispatch('GamesModule/fetchCurrentGame', to.params.id)
            .then(() => next())
            .catch((e) => {
              console.error(e);
              next({ name: 'NotFoundView' });
            });
          },
      },
      {
        path: '/game/:id',
        name: 'GameParticipantView',
        component: () => import (
          /* webpackChunkName: "game" */ '../views/GameParticipantView/index.vue'
        ),
      },
      {
        path: '/join-game',
        name: 'JoinGameView',
        component: () => import (
          /* webpackChunkName: "join" */ '../views/JoinGameView/index.vue'
        ),
      },
      {
        path: '/delete-my-data',
        name: 'DeleteMyDataView',
        component: () => import (
          /* webpackChunkName: "delete-my-data" */ '../views/DeleteMyDataView/index.vue'
        ),
      },
      {
        path: '/404',
        alias: '*',
        name: 'NotFoundView',
        component: () => import (
          /* webpackChunkName: "not-found" */ '../views/NotFoundView/index.vue'
        ),
      },
    ],
  },
];