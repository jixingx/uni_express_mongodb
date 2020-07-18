<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @tap="toback">
				<image src="../../static/images/common/back.png" class="back-img"></image>
			</view>
			<view class="top-bar-right">
				<view class="more-img">
					<image src="../../static/images/userhome/more.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="bg">
			<view class="bg-bai">	
			</view>
			<image src="../../static/logo.png" class="bg-img" mode="aspectFill"></image>
		</view>
		<view class="main">
			<view class="user-header">
				<view class="sex" :style="{backgroundColor:sexBg}">
					<image src="../../static/images/userhome/female.png" mode=""></image>
				</view>
				<image src="../../static/logo.png" class="user-img" mode="aspectFill"></image>
			</view>
			<view class="user-imf">
				<view class="name">
					{{user.name}}
				</view>
				<view class="nick">
					昵称：{{user.nick}}
				</view>
				<view class="intr">
					{{user.intr}}
				</view>
			</view>
			<view class="bottom-bar">
				<view class="bottom-btn">加为好友</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sexBg:'rgba(255,93,91,1)',
				user:{
					name:'秋风',
					nick:'虬枝国',
					intr:'夜，结束了一天的喧嚣后安静下来，伴随着远处路灯那微弱的光。风，毫无预兆地席卷整片旷野，撩动人的思绪万千。'
				}
			};
		},
		methods:{
			//返回上一页
			toback:function(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";
	.bg{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		.bg-bai{
			width: 100%;
			height: 100%;
			
		}
		.bg-img{
			opacity: 0.4;
			position: absolute;
			left: -10rpx;
			top: -10rpx;
			z-index: -1;
			width: 110%;
			height: 110%;
			filter: blur(16px);
		}
	}
	.main{
		text-align: center;
		padding-top: 148rpx;
		.user-header{
			width: 412rpx;
			margin: 0 auto;
			height: 412rpx;
			position: relative;
			.sex{
				position: absolute;
				bottom: 22rpx;
				right: 22rpx;
				z-index: 10;
				width: 64rpx;
				height: 64rpx;
				//background-color: rgba(255,93,91,1);
				border-radius: $uni-border-radius-circle;
				image{
					padding: 16rpx;
					width: 32rpx;
					height: 32rpx;
				}
			}
			.user-img{
				width: 400rpx;
				height: 400rpx;
				border-radius: 48rpx;
				border: 6rpx solid rgba(255,255,255,1);
			}
		}
		.user-imf{
			padding-top:42rpx ;
			.name{
				color: $uni-text-color;
				font-size: 52rpx;
				line-height: 74rpx;
			}
			.nick{
				font-size: $uni-font-size-base;
				line-height: 40rpx;
				color: $uni-text-color;
			}
			.intr{
				padding: 20rpx 100rpx;
				font-size:$uni-font-size-base;
				font-weight: 300;
				color: $uni-text-color;
				line-height: 48rpx;
			}
		}
	}
	.bottom-bar{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 104rpx;
		// background-color: #eee;
		.bottom-btn{
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			margin: 0 auto;
			text-align: center;
			line-height: 80rpx;
			width: 684rpx;
			height: 80rpx;
			color: $uni-text-color;
			font-size: $uni-font-size-lg;
			background: $uni-color-primary;
			border-radius: $uni-border-radius-sm;
		}
	}
</style>
