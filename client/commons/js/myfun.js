export default{
	//首页时间转换
	dateTime:function(date){
		let old=new Date(date);
		let now=new Date();
		//获取old具体时间
		let d=old.getTime();
		let h=old.getHours();
		let m=old.getMinutes();
		let Y=old.getFullYear();
		let M=old.getMonth()+1;
		let D=old.getDate();
		//获取new具体时间
		let nd=now.getTime();
		let nh=now.getHours();
		let nm=now.getMinutes();
		let nY=now.getFullYear();
		let nM=now.getMonth()+1;
		let nD=now.getDate();
		//当天的时间
		if(D == nD && M==nM && Y==nY){
			
			if(h<10){
				h='0'+h
			}
			if(m<10){
				m='0'+h
			}
			return h+':'+m
		}
		
		//昨天时间
		if(D+1 == nD && M==nM && Y==nY){
			
			if(h<10){
				h='0'+h
			}
			if(m<10){
				m='0'+h
			}
			return '前天'+h+':'+m
		}else{//大于两天的
			return Y+'/'+M+'/'+D;
		}
	},
	//详细时间转换
	datialTime:function(date){
		let old=new Date(date);
		//获取old具体时间
		let d=old.getTime();
		let h=old.getHours();
		let m=old.getMinutes();
		let Y=old.getFullYear();
		let M=old.getMonth()+1;
		let D=old.getDate();
		
		//处理是按
		if(M<10){
			M='0'+M;
		}
		if(D<10){
			D='0'+D;
		}
		if(h<10){
			h='0'+h
		}
		if(m<10){
			m='0'+h
		}
		
		return Y+'-'+M+'-'+D+' '+h+':'+m;
		
	}
}