import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'

Vue.use(Vuex)


// 全局公共数据
let state = {
  aaa: window.id,
}

const store = new Vuex.Store({
  modules: {
    home,
  },
  state
})

export default store
