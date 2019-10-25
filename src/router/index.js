import Vue from 'vue'
import Router from 'vue-router'
// import { jslog } from '@/config/utils'
Vue.use(Router)

let routes = []

// (?!components)\.vue$
importPages(require.context('../view', true, /.vue$/, 'lazy'))
function importPages(r) {
    r.keys().forEach(key => {
      console.log()
        routes.push({ path: (key.split('.'))[1].split('/index')[0], component: () => r(key) })
    })
}
// 把组件去掉
const pageRoutes = routes.filter(({path}) => path.indexOf('components') === -1)
// console.log(pageRoutes)
// if (!routes.length) {
    // jslog({ title: '1frontError:router未创建成功' })
// }
const router = new Router({
    mode: 'history',
    routes: [
        ...pageRoutes,
    ]
})

export default router
