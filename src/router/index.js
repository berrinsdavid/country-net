import Vue from 'vue'
import Router from 'vue-router'
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

const router = new Router({
    mode: 'history',
    routes: [
        ...routes,
        {
            path: '/',
            component: resolve => require(['../view/home/index.vue'], resolve) // 首页
        },
        {
            path: '*',
            component: resolve => require(['../view/404/404.vue'], resolve) // 404
        },
    ]
})

export default router
