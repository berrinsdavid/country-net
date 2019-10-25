<template>
	<div class="hello">
		<h1>首页</h1>
		<component :is="keyfeature"></component>
	</div>
</template>

<script>
import {keyfeature} from '../../public/index'   //组件
import * as api from './api'   //接口api
import * as utils from '../../utils'   //公共方法
export default {
	name: 'home',
	created() {
    },
    mounted () {
		this.masterdata()
    },
    computed: {      
        keyfeature() {
            return keyfeature
        }
	},
	watch:{
      
    },
  	data () {
		return {
			msg: 'q'
		}
	},
	methods: {
        // 禁止页面滚动
        disableScrollBars(){
            $('.illumePage').css("position","fixed")
        },
        //开启页面滚动
        enableScrollBars(){
            $('.illumePage').css("position","static")
        },
		async masterdata() { // 获取助力好友信息
			let formData = {
			}
			console.log(api.home)
            // const res = await lib.HTTP(`${conf.server}${api.home}`, formData);
            // if(res.code == 200) {}
        },
       
    }
	  
}
</script>

<style scoped lang="less">
	.hello{
		background: red;
	}
</style>
