<template>
	<div class="home">
		<x-header>This is the page title.</x-header>
		<div class="app">首页</div>
		<div>
			{{msg}}
		</div>
		<div class="epp">
			<keyfeature/>
		</div>
		<mt-button type="primary">primary</mt-button>
	</div>
</template>

<script>
import * as api from './api'   //接口api
import * as utils from '../../utils'   //公共方法

import { XHeader } from 'vux'
import { Button } from 'mint-ui';
export default {
	created() {
		console.log(this.$store.state.aaa,'公共数据')
		console.log(this.$store.state.home.bbb,'模块化自己页面的数据')
		console.log(process.env.NODE_ENV,'process.env.NODE_ENV')
    },
    mounted () {
		this.masterdata()
	},
	components: {
		XHeader,Button
	},
    computed: {      
        keyfeature() {
            // return keyfeature
        }
	},
	watch:{
      
    },
  	data () {
		return {
			msg: this.$moment("12-25-1995", "MM-DD-YYYY").format('MM月DD日')
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
		async masterdata() { 
			let formData = {
			}
			console.log(api.home,'接口名字')
			console.log(utils.server)
            // const res = await lib.HTTP(`${utils.server}${api.home}`, formData);
            // if(res.code == 200) {}
        },
       
    }
	  
}
</script>

<style scoped lang="less">
	.home{
		width: 100%;
		height: 100%;
		position: relative;
		.app{
			width: 1rem;
			height: 1rem;
			font-size: 0.35rem;
			background: red;
		}
		.epp{
			width: 5rem;
		}
	}
	
</style>
