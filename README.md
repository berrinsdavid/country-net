  # watch2.0.2
>  vue项目
## 指令
``` bash
// 安装依赖
cnpm install 

// 开发运行 地址: localhost:8080
npm run dev

// 打包
npm run build
```
## 目录结构
```
\-- build
\-- config      --- 配置文件
\-- dist       --- 打包文件目录
\-- src 
	\-- assets    --- 要打包的本地资源
	\-- public    --- 组件
		\-- home -- 个人组件文件夹名
		    \-- keyfeature    -- 组件文件
		-- index 组件对外接口
	\-- router
		-- index 路由配置
	\-- store vuex数据
		\-- modules  模块化数据
		    \-- home 单个模块开发或者页面数据
		\-- index 组件对外接口
    -- view 页面
        \-- home 首页
        \-- 404  无效路径页面
	-- App.vue
	-- main.js vue入口文件
	-- utils.js 公共方法
\-- static      --- 引入外部资源
package.json  配置文件
```
## 完成功能
> * 按需引入
> * 模块化
> * 数据驱动
> * 高复用性
> * 可扩展性