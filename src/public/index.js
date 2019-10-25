let publics = {};
importPage(require.context('../public', true, /\.vue$/, 'lazy'))

function importPage(r) {
    r.keys().forEach(key => {
        let keyname = key.split('.')[1].split('/')[2]
        publics[keyname] = () => r(key)
    })
}

// import './../public/formework/index'

// 首页面 home
export const keyfeature = publics.keyfeature    // 首页列表



//电费电量
// export const keyfeature = publics.keyfeature    // 组件1
