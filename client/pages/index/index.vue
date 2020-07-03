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
		<view class="main">
			<view class="apply">
				
			</view>
			<view class="friends">
				<view class="friend-list">
					<view class="friend-list-l">
						<text class="tip">1</text>
						<image src="../../static/logo.png" mode=""></image>
					</view>
					<view class="friend-list-r">
						<view class="top">
							<view class="name">
								都知道
							</view>
							<view class="time">
								13:43
							</view>
							
						</view>
						<view class="news">
							事物所包含的实质性事物dsfsdfdsfsddsffsdfsdfds
						</view>
					</view>
				</view>
			</view>
			<view class="friends">
				<view class="friend-list">
					<view class="friend-list-l">
						<text class="tip">1</text>
						<image src="../../static/logo.png" mode=""></image>
					</view>
					<view class="friend-list-r">
						<view class="top">
							<view class="name">
								都知道
							</view>
							<view class="time">
								13:43
							</view>
							
						</view>
						<view class="news">
							事物所包含的实质性事物dsfsdfdsfsddsffsdfsdfds
						</view>
					</view>
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
		// display: flex;
		// flex-direction: column;
		// align-items: center;
		// justify-content: center;
	}
	.top-bar{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1001;
		height: 88rpx;
		width: 100%;
		box-sizing: border-box;
		background-color: $uni-bg-color;
		//padding-left: $uni-spacing-col-base;
		//padding-right: $uni-spacing-col-base;
		// box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.1);
		background: $uni-bg-color;
		border-bottom:1px solid $uni-border-color;
		.top-bar-left{
			float: left;
			padding-left: $uni-spacing-col-base;
			image{
				padding-top: 10rpx;
				width: 68rpx;
				height: 68rpx;
				border-radius: 16rpx;
				background-color: $uni-color-primary;
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
			padding-right: 14rpx;
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
	.main{
		padding: 88rpx $uni-spacing-col-base 0;
	}
	.friend-list{
		height: 96rpx;
		padding: 16rpx 0;
		.friend-list-l{
			position: relative;
			float: left;
			image{
				width: 96rpx;
				height: 96rpx;
				border-radius: $uni-border-radius-base;
			}
			.tip{
				position: absolute;
				z-index: 10;
				top: -6rpx;
				left: 68rpx;
				min-width: 36rpx;
				height: 36rpx;
				background: $uni-color-warning;
				border-radius: $uni-border-radius-circle;
				font-size: $uni-font-size-sm;
				color: $uni-text-color-inverse;
				line-height: 36rpx;
				text-align: center;
			}
		}
		.friend-list-r{
			padding-left:128rpx;
			
			.top{
				height: 50rpx;
				overflow: hidden;
				.name{
					float: left;
					font-size: 36rpx;
					color: $uni-text-color;
					line-height: 50rpx;
				}
				.time{
					float: right;
					font-size: $uni-font-size-sm;
					color: $uni-text-color-disable;
					line-height: 58rpx;
				}
			}
		}
		.news{
			font-size: $uni-font-size-base;
			color: $uni-text-color-grey;
			line-height: 40rpx;
			display:-webkit-box;
			-webkit-box-orient:vertical;
			-webkit-line-clamp:1;
			overflow: hidden;
		}
	}
</style>
