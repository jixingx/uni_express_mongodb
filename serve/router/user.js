var express=require('express');
var router=express.Router();
//引入邮箱模块
var nodemailer=require('nodemailer');
//创建传输方式
var transporter=nodemailer.createTransport({
    service:'qq',
    auth:{
        user:'1544916656@qq.com',
        pass:'lbuqaeibnqjtjjge'
    }
})

//注册发送邮件给用户
router.post('/register',(req,res)=>{
    let userEamil=req.body.user
    //发送信息内容
    let options={
        from:'1544916656@qq.com',//发送者邮箱
        to:userEamil,//接收者邮箱
        subject:'感谢你在yike注册',//标题
        html:'<span>欢迎您的加入</span><a href="http://localhost:8080">点击链接</a>'
    }
    //发送邮件
    transporter.sendMail(options,(err,msg)=>{
        if(err){
            console.log(err)
        }else{
            console.log('邮箱发送成功')
        }
    })
})


module.exports=router