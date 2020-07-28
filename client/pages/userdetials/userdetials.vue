<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @tap="toSignIn">
				<image src="../../static/images/common/back.png" class="back-img"></image>
			</view>
			<view class="top-bar-center">
				<view class="title">
					详情
				</view>
			</view>
			<view class="top-bar-right">
				<view class="pice">
					
				</view>
			</view>
		</view>
		<view class="main">
			<view class="column heads">
				<view class="row head">
					<view class="title">
						头像
					</view>
					<view class="user-head">
						<image-cropper  :src="tempFilePath" @confirm="confirm" @cancel="cancel" ></image-cropper>
						    <image :src="cropFilePath" @tap="upload"  class="user-img" ></image>
					</view>
					<view class="more">
						<image src="../../static/images/userdetials/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row">
					<view class="title">
						签名
					</view>
					<view class="cont">
						广泛的的风格突然能和你规划同样哪天哪天和人谈话人体和人谈话人体不让别人
					</view>
					<view class="more">
						<image src="../../static/images/userdetials/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row">
					<view class="title">
						注册
					</view>
					<view class="cont">
						2020-04-20 23:23:32
					</view>
				</view>
			</view>
			<view class="column">
				<view class="row">
					<view class="title">
						昵称
					</view>
					<view class="cont">
						好多课
					</view>
					<view class="more">
						<image src="../../static/images/userdetials/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row">
					<view class="title">
						性别
					</view>
					<view class="cont">
						<picker @change="bindPickerChange" :value="index" :range="array">
							<view class="uni-input">{{array[index]}}</view>
						</picker>
					</view>
					<view class="more">
						<image src="../../static/images/userdetials/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row">
					<view class="title">
						生日
					</view>
					<view class="cont">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">{{date}}</view>
						</picker>
					</view>
					<view class="more">
						<image src="../../static/images/userdetials/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row">
					<view class="title">
						电话
					</view>
					<view class="cont">
						12323246865
					</view>
					<view class="more">
						<image src="../../static/images/userdetials/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row">
					<view class="title">
						邮箱
					</view>
					<view class="cont">
						12323246865@qq.com
					</view>
					<view class="more">
						<image src="../../static/images/userdetials/more.png" mode="aspectFit"></image>
					</view>
				</view>
				
			</view>
			<view class="column">
				<view class="row">
					<view class="title">
						密码
					</view>
					<view class="cont">
						******
					</view>
					<view class="more">
						<image src="../../static/images/userdetials/more.png" mode="aspectFit"></image>
					</view>
				</view>
			</view>
			<view class="bt2">
				退出登录
			</view>
			
		</view>
	</view>
</template>

<script>
	import ImageCropper from "../../components/ling-imgcropper/ling-imgcropper.vue";
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				cropFilePath:'../../static/logo.png',
				array: ['男', '女', '未知'],
				index:0,
				date: currentDate,
				tempFilePath: '',
				headimg:''
			};
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		components: {ImageCropper},
		methods:{
			toSignIn:function(){
				uni.navigateBack({
					delta:1
				})
			},
			//性别选择
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			//生日选择
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			//获取日期
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
	
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			//头像裁剪
			upload() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择或拍照选择
					success: (res) => {
						this.tempFilePath = res.tempFilePaths.shift()
					}
				});
			},
			confirm(e) {
				this.tempFilePath = '';
				this.cropFilePath = e.detail.tempFilePath;
				this.headimg=e.detail.tempFilePath;
				uni.uploadFile({
					url:'后端地址上传图片接口地址',
					filePath: this.headimg,
					name: 'file',
					fileType:'image',
						//formData:{},传递参数
					success: (uploadFileRes) => { 
						 var backstr= uploadFileRes.data;
	//自定义操作
					},
					complete() {
						//console.log("this is headimg"+this.headimg)   
					},
					fail(e) {
						console.log("this is errormes "+e.message)  
					}
				});
			},
			cancel() {
				console.log('canceled')
			}
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";
	.top-bar{
		background: rgba(255,255,255,0.96);
		border-bottom: 1px solid $uni-border-color;
	}
	.main{
		padding-top: 118rpx;
		display: flex;
		flex-direction: column;
		
		.column{
			display: flex;
			flex-direction: column;
			padding-top: 12rpx;
			width: 100%;
			border-bottom:1px solid $uni-border-color;
			.row{
				display: flex;
				flex-direction: row;
			}
			.title{
				flex: none;
				padding:0 $uni-spacing-col-base;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height:112rpx;
			}
			.head{
				height: 148rpx;
				display: flex;
				align-items: center;
			}
			.user-head{
				flex: auto;
			}
			.user-img{
				width: $uni-img-size-lg;
				height: $uni-img-size-lg;
				border-radius: $uni-border-radius-base;
			}
			.cont{
				flex: auto;
				
				
				font-size: $uni-font-size-lg;
				color: $uni-text-color-grey;
				line-height:112rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.more{
				flex: none;
				height: 112rpx;
				display: flex;
				align-items:center;
				image{
					width: 80rpx;
					height: 28rpx;
				}
			}
			
		}
		.bt2{
			margin: 160rpx;
			text-align: center;
			font-size: $uni-font-size-lg;
			color: $uni-color-warning;
			line-height: 88rpx;
		}
	}
</style>
