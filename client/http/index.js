import {BASEURL} from '../config/config.js'

//公共的请求
const request=function(options){
	options.url=BASEURL+options.url;
	try{
		const token = uni.getStorageSync('token');
		console.log(token)
		if(token){
			options.header={
				'Authorization' : 'Bearer ' + token
			}
		}else{
		    uni.navigateTo({
				url: '../pages/singnin/singnin' 
			});
			return;
		}
	}catch(e){
		console.log(e)
	}
	return uni.request(options)
}

export default request;