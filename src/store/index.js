import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
// 引入模块类
import user from './module/user'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  // 使用模块
  modules: {
    user
  }
})
