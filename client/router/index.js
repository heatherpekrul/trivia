import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0}),
  routes,
});

router.afterEach((to, from) => {
  const default_title = 'Trivia';
  Vue.nextTick(() => {
    if (to.meta.title) {
      document.title = `${to.meta.title} | ${default_title}`;
    } else {
      document.title = default_title;
    }
  });
});

export default router;
