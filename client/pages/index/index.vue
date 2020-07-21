<template>
	<view class="content">
		<view class="top-bar">
			<navigator url="../userhome/userhome" class="top-bar-left" hover-class="none">
				<image src="../../static/logo.png" mode="" ></image>
			</navigator>
			<view class="top-bar-center">
				<image src="../../static/images/index/logo.png" class="logo"></image>
			</view>
			<view class="top-bar-right">
				<navigator url="../search/search" class="search" hover-class="none">
					<image src="../../static/images/index/search.png" mode=""></image>
				</navigator>
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
				<view class="friend-list" v-for="(item,index) in friend" :key="index">
					<view class="friend-list-l">
						<text class="tip" v-if="item.tip>0">{{item.tip}}</text>
						<image :src="'../../static/'+item.imgurl" mode=""></image>
					</view>
					<view class="friend-list-r">
						<view class="top">
							<view class="name">
								{{item.name}}
							</view>
							<view class="time">
								{{changeTime(item.time)}}
							</view>
							
						</view>
						<view class="news">
							{{item.news}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import datas from "../../commons/js/datas.js"
	import myfun from "../../commons/js/myfun.js"
	export default {
		data() {
			return {
				friend: []
			}
		},
		onLoad() {
			this.getFrindex();
		},
		methods: {
			changeTime:function(date){
				return myfun.dateTime(date)
			},
			getFrindex:function(){
				this.friend=datas.frineds();
				console.log((this.friend))
			}
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";
	// .content {
	// 	display: flex;
	// 	flex-direction: column;
	// 	align-items: center;
	// 	justify-content: center;
	// 	padding-top: var(--status-bar-height);
		
	// }
	.top-bar{
		background: rgba(255,255,255,0.9);
		border-bottom:1px solid $uni-border-color;
	}
	.main{
		padding-top: 104rpx;
		padding-bottom: $uni-spacing-col-base;
		// margin-top: var(--status-bar-height);
	}
	.friend-list{
		height: 96rpx;
		padding: 16rpx $uni-spacing-col-base;
		&:active{
			background-color: $uni-bg-color-grey;
		}
		.friend-list-l{
			position: relative;
			float: left;
			image{
				width: 96rpx;
				height: 96rpx;
				border-radius: $uni-border-radius-base;
				background-color: $uni-color-primary;
			}
			.tip{
				position: absolute;
				z-index: 10;
				top: -6rpx;
				left: 68rpx;
				min-width: 22rpx;
				height: 36rpx;
				padding: 0 8rpx;
				background: $uni-color-warning;
				border-radius: 18rpx;
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
