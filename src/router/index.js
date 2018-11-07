import Vue from 'vue'
import Router from 'vue-router'
// 路由列表
import routes from './routers'
import { setTitle } from '@/lib/util'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})
const HAS_LOGIN = true
// 全局守卫
// 登录之前验证
router.beforeEach((to, from, next) => {
  // 设置网站标题
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    (HAS_LOGIN) ? next() : next({ name: 'login' })
  } else {
    (HAS_LOGIN) ? next({ name: 'home' }) : next()
  }
})
// 路由跳转之后
router.afterEach((to, from) => {
  // 跳转成功后取消进度条
})
export default router
