import Vue from 'vue';
import Router from 'vue-router';
import routes from './route';

Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes,
});
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});
export default router;
