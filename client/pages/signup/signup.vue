<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @tap="toSignIn">
				<image src="../../static/images/common/back.png" class="back-img"></image>
			</view>
		</view>
		<view class="logo">
			<image src="../../static/images/signin/logo.png"></image>
		</view>
		<view class="main">
			<view class="title">
				注册
			</view>
			<view class="inputs">
				<view class="inputs-div">
					<input type="text" placeholder="请取个名字" class="user" placeholder-style="color:#bbb;font-weighht:400;" @blur="getUser" />
					<view class="employ" v-if="useremploy">已占用</view>
					<image src="../../static/images/signup/right1.png" class="ok" v-if="isuser"></image>
				</view>
				<view class="inputs-div">
					<input type="text" placeholder="请输入邮箱" class="email" placeholder-style="color:#bbb;font-weighht:400;" @blur="isEmail" />
					<view class="employ" v-if="emailemploy">已占用</view>
					<view class="invalid" v-if="invalid">邮箱无效</view>
					<image src="../../static/images/signup/right1.png" class="ok" v-if="isemail"></image>
				</view>
				<view class="inputs-div">
					<input :type="type" placeholder="这是输入密码" class="psw"placeholder-style="color:#bbb;font-weighht:400;" @blur="getPsw" />
					<image src="../../static/images/signup/look.png" class="look" v-if="look" @tap="looks"></image>
					<image src="../../static/images/signup/biyan.png" class="look" v-else @tap="looks"></image>
				</view>
				
			</view>
		</view>
		<view :class="[{submit:isok},{submit1:!isok}]" @tap="register">注册</view>
	</view>
</template>

<script>
	import request from '../../http/index.js'
	export default {
		data() {
			return {
				type:'password',
				isuser:false,//用户名是否可用
				isemail:false,//邮箱是否可用
				look:false,//是否显示密码
				invalid:false,//邮箱是否合法
				useremploy:false,//用户是否被占用
				emailemploy:false,//邮箱是否被占用
				email:'',//邮箱
				user:'',//用户名称
				psw:'',//密码
				isok:false,
			};
		},
		methods:{
			//密码显示隐藏方法
			looks:function(){
				if(this.look){
					this.type="password";
					this.look=!this.look
				}else{
					this.type="true";
					this.look=!this.look
				}
			},
			//判断是否为邮箱格式
			isEmail:function(e){
				// console.log(e)
				// console.log(e.detail)
				let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
				this.email=e.detail.value
				if(this.email.length>0){
					if(reg.test(this.email)){
						this.invalid=false
						let That=this
						request({
							url:'/user/email',
							data:{
								email:this.email
							},
							method:"POST",
							success:function(data){
								console.log(data)
								if(data.data.doc==1){
									That.isemail=false
									That.emailemploy=true
								}else{
									That.isemail=true
									That.emailemploy=false
								}
							},
							fail:function(error){
								console.log(error)
							}
						})
					}else{
						this.invalid=true
						this.isemail=false
					}
				}
			},
			//获取用户名
			getUser:function(e){
				this.user=e.detail.value
				let That=this
				request({
					url:'/user/name',
					data:{
						user:this.user
					},
					method:"POST",
					success:function(data){
						console.log(data)
						if(data.data.doc==1){
							That.isuser=false
							That.useremploy=true
						}else{
							That.isuser=true
							That.useremploy=false
						}
					},
					fail:function(error){
						console.log(error)
					}
				})
				this.isOk()
			},
			//获取密码
			getPsw:function(e){
				this.psw=e.detail.value
				this.isOk()
			},
			//判断注册
			isOk:function(){
				if(this.isuser && this.isemail && this.psw.length>5){
					this.isok=true
				}else{
					this.isok=false
				}
			},
			//跳转到登陆页面
			toSignIn:function(){
				uni.navigateBack({
					delta:1
				})
			},
			//注册请求
			register:function(){
				if(this.isok){
					request({
						url:'http://localhost:3000/user/register',
						data:{
							user:this.user,
							email:this.email,
							psw:this.psw
						},
						method:"POST",
						success:function(data){
							console.log(data)
						},
						fail:function(error){
							console.log(error)
						}
					})
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
		
	// 	.top-bar-left{
	// 		float: left;
	// 		padding-left: 32rpx;
	// 		width: 88rpx;
	// 		height: 88rpx;
	// 		.text{
	// 			font-size: $uni-font-size-lg;
	// 			font-weight: 500;
	// 			color: $uni-text-color;
	// 			line-height: 88rpx;
	// 		}
	// 		.back-img{
	// 			margin-top: 21rpx;
	// 			width: 46rpx;
	// 			height: 46rpx;
	// 		}
	// 	}
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
		.inputs-div{
			position: relative;
		}
		.employ,.invalid{
			position: absolute;
			right: 0;
			top: 40rpx;
			float: 500;
			font-size: $uni-font-size-base;
			font-weight: 500;
			color: $uni-color-warning;
			line-height: 88rpx;
		}
		.ok{
			position: absolute;
			right: 0;
			top: 76rpx;
			width: 38rpx;
			height: 30rpx;
		}
		.look{
			position: absolute;
			right: 0;
			top: 76rpx;
			width: 32rpx;
			height: 18rpx;
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
		font-weight: 500;
		color: $uni-text-color;
		line-height: 96rpx;
		text-align: center;
	}
	.submit1{
		margin: 0 auto;
		width: 520rpx;
		height: 96rpx;
		background: rgba(39,40,50,0.2);
		border-radius:48rpx;
		font-size: $uni-font-size-lg;
		font-weight: 500;
		color: $uni-text-color-inverse;
		line-height: 96rpx;
		text-align: center;
	}
</style>
