export default{
	frineds:function(){
		let  friendarr=[
			{
				id:1,
				imgurl:"logo.png",
				tip:2,
				name:'大海',
				email:'dahai@163.com',
				time:new Date(),
				news:"事物所包含的实质性事物dsfsdfdsfsddsffsdfsdfds"
			},
			{
				id:2,
				imgurl:"logo.png",
				tip:0,
				name:'大海2',
				email:'dahai2@163.com',
				time:new Date(),
				news:"事物所包含的实质性事物dsfsdfdsfsddsffsdfsdfds"
			},
			{
				id:3,
				imgurl:"logo.png",
				tip:6,
				name:'大海3',
				email:'dahai3@163.com',
				time:new Date(),
				news:"事物所包含的实质性事物dsfsdfdsfsddsffsdfsdfds"
			},
			{
				id:4,
				imgurl:"logo.png",
				tip:8,
				name:'大海4',
				email:'dahai4@163.com',
				time:new Date(),
				news:"事物所包含的实质性事物dsfsdfdsfsddsffsdfsdfds"
			},
			{
				id:15,
				imgurl:"logo.png",
				tip:9,
				name:'大海5',
				email:'dahai5@163.com',
				time:new Date(),
				news:"事物所包含的实质性事物dsfsdfdsfsddsffsdfsdfds"
			},
			{
				id:6,
				imgurl:"logo.png",
				tip:13,
				name:'大海6',
				email:'dahai6@163.com',
				time:new Date(),
				news:"事物所包含的实质性事物dsfsdfdsfsddsffsdfsdfds"
			}
		]
		return friendarr;
	},
	//好友关系
	isFriend:function(){
		let isfriend=[
			{
				userid:1,
				friend:2
			},
			{
				userid:1,
				friend:4
			},
			{
				userid:1,
				friend:5
			},
			{
				userid:1,
				friend:6
			},
		]
		return isfriend
	}
}