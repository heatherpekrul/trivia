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
        meta: {
          title: 'Dashboard'
        },
        component: () => import(
          /* webpackChunkName: "dashboard" */ '../views/DashboardView/index.vue'
        ),
      },
      {
        path: '/login',
        name: 'LoginView',
        meta: {
          title: 'Login'
        },
        component: () => import (
          /* webpackChunkName: "login" */ '../views/LoginView/index.vue'
        ),
      },
      {
        path: '/present/:id',
        name: 'GamePresentationView',
        meta: {
          title: 'Present Game'
        },
        component: () => import (
          /* webpackChunkName: "present" */ '../views/GamePresentationView/index.vue'
        ),
        beforeEnter: async (to, from, next) => {
          await store.dispatch('GamesModule/fetchCurrentGame', to.params.id)
            .then(() => {
              to.meta.title = `${store.getters['GamesModule/currentGame'].name} | ${to.meta.title}`;
              next();
            })
            .catch((e) => {
              console.error(e);
              next({ name: 'NotFoundView' });
            });
          },
      },
      {
        path: '/game/:id',
        name: 'GameParticipantView',
        meta: {
          title: 'Game'
        },
        component: () => import (
          /* webpackChunkName: "game" */ '../views/GameParticipantView/index.vue'
        ),
      },
      {
        path: '/join-game',
        name: 'JoinGameView',
        meta: {
          title: 'Join Game'
        },
        component: () => import (
          /* webpackChunkName: "join" */ '../views/JoinGameView/index.vue'
        ),
      },
      {
        path: '/delete-my-data',
        name: 'DeleteMyDataView',
        meta: {
          title: 'Delete My Data'
        },
        component: () => import (
          /* webpackChunkName: "delete-my-data" */ '../views/DeleteMyDataView/index.vue'
        ),
      },
      {
        path: '/404',
        alias: '*',
        name: 'NotFoundView',
        meta: {
          title: '404 Not Found'
        },
        component: () => import (
          /* webpackChunkName: "not-found" */ '../views/NotFoundView/index.vue'
        ),
      },
    ],
  },
];