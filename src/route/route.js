export default [
  {
    path: '/',
    component: () => import('_v/Home.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('_v/Home.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('_v/About.vue'),
    meta: {
      title: '关于',
    },
  },
];
