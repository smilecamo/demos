import Home from '@/views/Home.vue'

export default[
  // 重定向
  {
    path: '/redirect',
    redirect: '/'
  },
  {
    path: '/',
    name: 'home',
    // 别名
    alias: '/home_page',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('_v/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // 异步加载路由组件,只有访问时才会去加载
    component: () => import('_v/About.vue'),
    meta: {
      title: '关于'
    }
  },
  // 动态路由
  // 通过 $route.params.name 获取到name
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('_v/Argu.vue')
  },
  // 嵌套路由
  {
    path: '/parent',
    name: 'parent',
    component: () => import('_v/Parent.vue'),
    children: [
      {
        path: 'children',
        component: () => import('_v/Children.vue')
      }
    ]
  },
  // 命名路由
  {
    path: '/name',
    components: {
      // 默认显示
      default: () => import('_v/Children.vue'),
      email: () => import('_v/email.vue'),
      tel: () => import('_v/tel.vue')
    }
  },
  // 404 必须设置在最后面
  {
    path: '*',
    component: () => import('_v/404.vue')
  }
]
