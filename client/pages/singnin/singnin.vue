<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-right">
				<view class="text" @tap="toSignUp">
					注册
				</view>
			</view>
		</view>
		<view class="logo">
			<image src="../../static/images/signin/logo.png"></image>
		</view>
		<view class="main">
			<view class="title">
				登录
			</view>
			<view class="slogan">
				您好，欢迎来到 yike!
			</view>
			<view class="inputs">
				<input type="text" value="" placeholder="用户名/邮箱" class="user" placeholder-style="color:#bbb;font-weighht:400;" @blur="getUser"/>
				<input type="password" value="" placeholder="密码" class="psw"placeholder-style="color:#bbb;font-weighht:400;" @blur="getPsw"/>
			</view>
			<view class="tips">
				输入用户或密码错误！
			</view>
		</view>
		<view class="submit" @tap="login">登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:'',
				psw:''
			};
		},
		methods:{
			//后台连接测试
			testFun:function(){
				uni.request({
					url:'http://localhost:3000/ceshi/home',
					data:{
						
					},
					method:"GET",
					success:function(data){
						console.log(data)
					}
				})
			},
			//跳转到注册页面
			toSignUp:function(){
				uni.navigateTo({
					url:'../signup/signup'
				})
			},
			//获取用户名/邮箱
			getUser:function(e){
				this.user=e.detail.value
			},
			//获取密码
			getPsw:function(e){
				this.psw=e.detail.value
			},
			//登录提交
			login:function(){
				if(this.user && this.psw){
					console.log('提交')
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";
	// .content {
		
	// 	padding-top: var(--status-bar-height);
	// }
	// .top-bar{
	// 	position: fixed;
	// 	top: 0;
	// 	left: 0;
	// 	z-index: 1001;
	// 	height: 88rpx;
	// 	padding-top: var(--status-bar-height);
	// 	width: 100%;
	// 	background-color: $uni-bg-color;
	// 	background: $uni-bg-color;
		
		// .top-bar-right{
		// 	float: right;
		// 	padding-right: 32rpx;
		// 	.text{
		// 		font-size: $uni-font-size-lg;
		// 		font-weight: 500;
		// 		color: $uni-text-color;
		// 		line-height: 88rpx;
		// 	}
		// }
	// }
	.logo{
		text-align: center;
		image{
			padding-top: 256rpx;
			width: 194rpx;
			height: 92rpx;
			margin: 0 auto;
		}
	}
	.main{
		padding: 54rpx $uni-spacing-row-lg 120rpx;
		.title{
			font-size: 56rpx;
			font-weight: 500;
			color: $uni-text-color;
			line-height: 80rpx;
		}
		.slogan{
			font-size: 40rpx;
			color: $uni-text-color-grey;
			line-height: 56rpx;
		}
		.inputs{
			padding-top: 8rpx;
			input{
				padding-top: 40rpx;
				height: 88rpx;
				font-size: $uni-font-size-lg;
				font-weight: 500;
				color: $uni-text-color;
				line-height: 88rpx;
				border-bottom: 1px solid $uni-border-color;
			}
		}
		.tips{
			float: left;
			font-size: $uni-font-size-lg;
			color: $uni-color-warning;
			line-height: 56rpx;;
		}
	}
	.submit{
		margin: 0 auto;
		width: 520rpx;
		height: 96rpx;
		background: $uni-color-primary;
		box-shadow: 0px 50rpx 32rpx -36rpx rgba(255,228,49,0.4);
		border-radius:48rpx;
		font-size: $uni-font-size-lg;
		color: $uni-text-color;
		line-height: 96rpx;
		text-align: center;
	}
</style>
