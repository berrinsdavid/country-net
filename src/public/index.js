import Vue from 'vue'
export default {
    created: function() {
        //  获取文件夹里内容
        const requireComponent = require.context('../public', true, /\.vue$/)
        requireComponent.keys().forEach(filePath => {
            const componentpath = filePath.replace('./', '').replace('.vue', '')
            const componentName = filePath.replace('./', '').replace('.vue', '').split('/').pop()
            // 引入文件
            var myComponent = () => import('../public/' + componentpath + '.vue')
            // 注册组件
            Vue.component(componentName, myComponent)
        })
    }
}

