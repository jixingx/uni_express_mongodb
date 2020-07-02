<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left">
				<image src="../../static/logo.png" mode=""></image>
			</view>
			<view class="top-bar-center">
				<image src="../../static/images/index/logo.png" class="logo"></image>
			</view>
			<view class="top-bar-right">
				<view class="search">
					<image src="../../static/images/index/search.png" mode=""></image>
				</view>
				<view class="add">
					<image src="../../static/images/index/add.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.top-bar{
		position: fixed;
		top: 0;
		left: 0;
		height: 88rpx;
		width: 100%;
		box-sizing: border-box;
		background-color: $uni-bg-color;
		padding-left: $uni-spacing-col-base;
		padding-right: $uni-spacing-col-base;
		// box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.1);
		background: $uni-bg-color;
		border-bottom:1px solid $uni-border-color;
		.top-bar-left{
			float: left;
			image{
				padding-top: 10rpx;
				width: 68rpx;
				height: 68rpx;
				border-radius: 16rpx;
			}
		}
		.top-bar-center{
			position: absolute;
			text-align: center;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			margin:auto;
			.logo{
				padding-top: 39rpx;
				width: 88rpx;
				height: 42rpx;
			}
		}
		.top-bar-right{
			float: right;
			.search{
				width: 88rpx;
				height: 88rpx;
				display: inline-block;
			}
			.add{
				width: 88rpx;
				height: 88rpx;
				display: inline-block;
			}
			image{
				padding: 18rpx 0 0 18rpx;
				width: 52rpx;
				height: 52rpx;
			}
		}
	}
</style>
