<template>
	<view class="content">
		<view class="top-bar">
			<view class="search-div">
				<image src="../../static/images/index/search.png" class="search-img"></image>
				<input type="search" value="" placeholder="搜索用户/群" class="search" placeholder-style="color:#bbb;font-weighht:400;" @input="search" />
			</view>
			<view class="top-bar-right">
				<view class="text">
					取消
				</view>
			</view>
		</view>
		<view class="main">
			<view class="search-user result">
				<view class="title">
					用户
				</view>
				<view class="list user">
					<image src="../../static/logo.png" mode=""></image>
					<view class="names">
						<view class="name">
							大力出奇迹
						</view>
						<view class="email">
							dalichuqiji@163.com
						</view>
					</view>
					<view class="right-bt send">
						发消息
					</view>
				</view>
				<view class="list user">
					<image src="../../static/logo.png" mode=""></image>
					<view class="names">
						<view class="name">
							大力出奇迹
						</view>
						<view class="email">
							dalichuqiji@163.com
						</view>
					</view>
					<view class="right-bt add">
						加好友
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
				searchval:''
			};
		},
		methods:{
			search:function(e){
				let searchval=e.detail.value
			}
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";
	.top-bar{
		background: rgba(255,255,255,0.9);
		border-bottom:1px solid $uni-border-color;
		.search-div{
			position: absolute;
			top: 0;
			left: 0;
			float: left;
			width: 100%;
			z-index: -1;
			box-sizing: border-box;
			padding: 14rpx 118rpx 14rpx $uni-spacing-col-base;
		}
		.search{
			// width: 600rpx;
			padding: 0 60rpx 0 12rpx;
			height: 60rpx;
			background: $uni-bg-color-grey;
			border-radius: 10px;
		}
		.search-img{
			position: absolute;
			right: 130rpx;
			top: 22rpx;
			width: 40rpx;
			height: 40rpx;
		}
	}
	.main{
		padding: 88rpx $uni-spacing-col-base;
		.result{
			padding-top: $uni-spacing-col-base;
			.title{
				font-size: 44rpx;
				font-weight: 500;
				color: $uni-text-color;
				line-height: 60rpx;
			}
			.list{
				width: 100%;
				height: 80rpx;
				padding: 20rpx 0;
				image{
					float: left;
					width: 80rpx;
					height: 80rpx;
					border-radius: $uni-border-radius-base;
				}
			}
			.names{
				float: left;
				padding-left: $uni-spacing-col-base;
			}
			.name{
				font-size: 36rpx;
				color: $uni-text-color;
				line-height: 50rpx;
			}
			.email{
				font-size: $uni-font-size-sm;
				color: rgba(39,49,50,1);
				line-height: 28rpx;
			}
			.right-bt{
				float: right;
				width: 120rpx;
				height: 48rpx;
				border-radius: 24rpx;
				font-size: $uni-font-size-sm;
				line-height: 48rpx;
				text-align: center;
				margin-top: 16rpx;
			}
			.send{
				background-color: $uni-color-primary;
				color: $uni-text-color;
			}
			.add{
				background-color: rgba(74,170,255,0.1);
				color: $uni-color-success;
			}
		}
	}
</style>
