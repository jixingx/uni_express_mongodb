<template>
	<view class="content">
		<view class="top-bar">
			<view class="search-div">
				<image src="../../static/images/index/search.png" class="search-img"></image>
				<input type="search" value="" placeholder="搜索用户/群" class="search" placeholder-style="color:#bbb;font-weighht:400;" @input="search" />
			</view>
			<view class="top-bar-right">
				<view class="text" @tap="back">
					取消
				</view>
			</view>
		</view>
		<view class="main">
			<view class="search-user result">
				<view class="title" v-if="userarr.length>0">
					用户
				</view>
				<view class="list user" v-for="(item,index) in userarr" :key="index">
					<image src="../../static/logo.png" mode=""></image>
					<view class="names">
						<view class="name" v-html="item.name">
							
						</view>
						<view class="email" v-html="item.email">
							
						</view>
					</view>
					<view class="right-bt send" v-if="item.tip==1">发消息</view>
					<view class="right-bt add" v-else>加好友</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import datas from '../../commons/js/datas.js'
	export default {
		data() {
			return {
				userarr:[]
			};
		},
		methods:{
			//获取关键词
			search:function(e){
				this.userarr=[];
				let searchval=e.detail.value;
				if(searchval.length>0){
					this.searchUser(searchval);
				}
				
			},
			//寻找关键词匹配的好友
			searchUser:function(e){
				let arr=datas.frineds();
				let exp=eval("/"+e+"/g");
				for(let i=0;i<arr.length;i++){
					if(arr[i].name.search(e)!=-1||arr[i].email.search(e)!=-1){
						this.isFriend(arr[i])
						arr[i].name=arr[i].name.replace(exp,"<span style='color:#4AAAFF'>"+e+"</span>")
						arr[i].email=arr[i].email.replace(exp,"<span style='color:#4AAAFF'>"+e+"</span>")
						this.userarr.push(arr[i]);
					}
				}
				// console.log(this.userarr)
			},
			//判断是否为好友
			isFriend:function(e){
				let tip=0;
				let arr=datas.isFriend();
				for(let i=0;i<arr.length;i++){
					if(arr[i].friend==e.id){
						tip=1;
					}
				}
				e.tip=tip
				// console.log(tip)
			},
			//返回上页
			back:function(){
				uni.navigateBack({
					delta:1
				})
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
