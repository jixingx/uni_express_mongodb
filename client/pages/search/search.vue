<template>
	<view class="content">
		<view class="top-bar">
			<view class="search-div">
				<image src="../../static/images/index/search.png" class="search-img"></image>
				<input type="search" value="" placeholder="搜索用户/群" class="search" placeholder-style="color:#bbb;font-weighht:400;" @input="getUser" />
			</view>
			<view class="top-bar-right">
				<view class="text">
					取消
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";
	.top-bar{
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
</style>
