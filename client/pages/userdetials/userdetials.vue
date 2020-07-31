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
				<view class="row"  @tap="modify('签名',dataarr.singn,false)">
					<view class="title">
						签名
					</view>
					<view class="cont">
						{{dataarr.singn}}
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
						{{changeTime(dataarr.zhuce)}}
					</view>
				</view>
			</view>
			<view class="column">
				<view class="row" @tap="modify('昵称',dataarr.name,false)">
					<view class="title">
						昵称
					</view>
					<view class="cont">
						{{dataarr.name}}
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
				<view class="row" @tap="modify('电话',dataarr.tell,false)">
					<view class="title">
						电话
					</view>
					<view class="cont">
						{{dataarr.tell}}
					</view>
					<view class="more">
						<image src="../../static/images/userdetials/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row"  @tap="modify('邮箱',dataarr.mail,true)">
					<view class="title">
						邮箱
					</view>
					<view class="cont">
						{{dataarr.mail}}
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
		<view class="modify" :style="{bottom:'-'+modifyHeight+'px'}" :animation="animatiionData">
			<view class="modify-header">
				<view class="close" @tap="modify">
					取消
				</view>
				<view class="title">
					签名
				</view>
				<view class="define" @tap="modifyStbmit">
					确定
				</view>
			</view>
			<view class="modify-main">
				<input type="text" class="modfiy-pwd" placeholder="请输入原密码" placeholder-style="color:#bbb;font-weighht:400;" v-show="ispwd"></input>
				<textarea v-model="data" class="modfiy-content"></textarea>
			</view>
		</view>
	</view>
</template>

<script>
	import ImageCropper from "../../components/ling-imgcropper/ling-imgcropper.vue";
	import myfun from "@/commons/js/myfun.js";
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				dataarr:{
					name:'小明',
					singn:'努力加油努力加油努力加油努力加油努力加油努力加油努力加油努力加油',
					zhuce:new Date(),
					sex:'男',
					birth:'1998-04-12',
					tell:'12345655353',
					mail:'13245655@qq.com'
				},//模拟数据
				cropFilePath:'../../static/logo.png',
				array: ['男', '女', '未知'],
				index:0,
				date: currentDate,
				tempFilePath: '',
				headimg:'',
				modifyTitle:'',//修改标题
				data:'修改的内容',//修改内容
				ispwd:false,//是否显示密码项
				pwd:'',//原密码
				animatiionData:{},//动画
				isModfiy:false,//动画开关
				modifyHeight:'',//页面高度
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
		onReady() {
			this.getElementStyle();
		},
		methods:{
			toSignIn:function(){
				uni.navigateBack({
					delta:1
				})
			},
			//时间处理
			changeTime:function(date){
				return myfun.datialTime(date)
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
			},
			//修改项弹框
			modify:function(type,data,ispwd){
				this.ispwd=ispwd
				this.modifyTitle=type
				this.data=data
				this.isModfiy=!this.isModfiy;
				var animation=uni.createAnimation({
					duration:300,
					timingFunction:'ease'
				})
				if(this.isModfiy){
					animation.bottom(0).step()
				}else{
					animation.bottom(-this.modifyHeight).step()
				}
				this.animatiionData=animation.export()
			},
			//获取页面高度
			getElementStyle:function(){
				const query=uni.createSelectorQuery().in(this);
				query.select('.modify').boundingClientRect(data=>{
					this.modifyHeight=data.height
				}).exec();
			},
			//弹窗修改确定
			modifyStbmit:function(){
				this.modify();
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
	// 修改弹窗
	.modify{
		position: fixed;
		z-index: 1002;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: #fff;
		.modify-header{
			width: 100%;
			height: 88rpx;
			padding-top: var(--status-bar-height);
			display: flex;
			flex-direction: row;
			align-items: center;
			border-bottom: 1px solid $uni-border-color;
			.close{
				padding-left: $uni-spacing-col-base;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 44rpx;
			}
			.title{
				flex: auto;
				text-align: center;
				font-size: 40rpx;
				color: $uni-text-color;
				line-height: 88rpx;
			}
			.define{
				padding-right: $uni-spacing-col-base;
				font-size: $uni-font-size-lg;
				color: $uni-color-success;
				line-height: 44rpx;
			}
		}
		.modify-main{
			display: flex;
			padding:$uni-spacing-col-base;
			flex-direction: column;
			.modfiy-pwd{
				padding: 16rpx 20rpx;
				box-sizing: border-box;
				width: 100%;
				margin-bottom: $uni-spacing-col-base;
				flex: auto;
				height: 88rpx;
				background: $uni-bg-color-grey;
				border-radius: $uni-border-radius-base;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 88rpx;
			}
			.modfiy-content{
				padding: 16rpx 20rpx;
				box-sizing: border-box;
				width: 100%;
				flex: auto;
				height: 386rpx;
				background: $uni-bg-color-grey;
				border-radius: $uni-border-radius-base;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 44rpx;
			}
		}
	}
</style>
