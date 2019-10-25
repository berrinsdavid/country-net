<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
*{
		-webkit-tap-highlight-color: rgba(0,0,0,0);
	}//解决苹果端点击出现黑框
	body{
		font-family:"黑体";
	}
	html,body{
		width: 100%;
		height: 100%;
	}
	body,h1,h3,h2,h4,h5,h6,p,dl,dd,ul,ol,form,input,fieldset,th,td,iframe{
		margin:0; 
		padding:0;
	}
	h1,h2,h3,h4,h5,h6,strong,b{
		font-weight:normal;
	}
	i,em{
		font-style:normal;
	}
	a{
		text-decoration:none;
		color:#666;
	}
	li{
		list-style:none;
	}
	img{
		border:none;
		vertical-align:top;
		pointer-events:none;
	}//禁止图片放大
	input{
		vertical-align:top;
	}
	a,input,area{
		outline:none;
	}
</style>
