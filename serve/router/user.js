var express=require('express');
var router=express.Router();
//引入加密模块
var bcrypt=require('bcryptjs');
//生成随机的salt
var salt=bcrypt.genSaltSync(10);
//生成hash密码
// var hash=bcrypt.hashSync("B4c0/\/",salt)
// //解密
// var verif=bcrypt.compareSync("B4c0/\/",hash)

//引入token
var jwt=require('jsonwebtoken');
//生成token
let poyload={name:'张三',admin:true}
let secret="chartshiguang"
let token=jwt.sign(poyload,secret,{expiresIn:3600*24*120})
//解析token
let payload=jwt.verify(token,secret)
console.log(payload)

//引入数据库模块
var User=require('../model/User');
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
/**
 * @api {POST} /user/register 注册接口
 * @apiName register
 * @apiGroup User
 * 
 * @apiParam (请求参数) {String} user 名字
 * @apiParam (请求参数) {String} email  邮箱
 * @apiParam (请求参数) {String} psw 密码
 * @apiParamExample {json} 请求参数示例:
 *  {
 *      user:'zs',//用户名
 *      email:'123@qq.com',//邮箱
 *      psw:'123'//密码
 *  }
 * 
 * @apiSuccess (成功返回) {Object} obj 用户信息
 * @apiSuccessExample {josn} 成功返回信息：
 * {
 *  sex: 'asexual',//性别
 *  imgurl: 'user.png',//头像地址
 *  _id: 5f18e65abab98d5ba00689f5,//id
 *  name: 'jixing',//用户名
 *  email: '1544916656@qq.com',//邮箱
 *  psw: '$2a$10$fi7fYIbII1TcqbQertVBIuZgQhd2M2Al4dr6.rSuIr/A4CPSbTYuG',//密码
 *  time: 2020-07-23T01:22:34.359Z,//注册时间
 * }
 * 
 * @apiErrorExample {String} 错误返回信息：
 *  返回500状态码和错误信息
 *  
 */
router.post('/register',(req,res)=>{
    let {user,email,psw}=req.body
    //密码加密
    let hash=bcrypt.hashSync(psw,salt)
    console.log(user,email,hash)
    //插入数据
    User.create({name:user,email,psw:hash,time:new Date()}).then((doc)=>{
        // console.log(doc)
        //发送信息内容
        let options={
            from:'1544916656@qq.com',//发送者邮箱
            to:email,//接收者邮箱
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
        res.send(doc)
    }).catch((err)=>{
        res.status(500).send(err);
    })
    
})

//验证用户是否已被注册
/**
 * @api {POST} /user/name 注册验证用户接口
 * @apiName name
 * @apiGroup User
 * 
 * @apiParam (请求参数) {String} user 名字
 * @apiParamExample {json} 请求参数示例:
 *  {
 *      user:'123@qq.com'//用户名
 *  }
 * 
 * @apiSuccess (成功返回) {Object} obj 包含状态码和用户名状态
 * @apiSuccessExample {josn} 成功返回信息：
 * {
 *  status: 200,//成功状态码
 *  doc: '0或1',//1代表已有用户，0代表账户可注册
 * }
 * 
 * @apiErrorExample {String} 错误返回信息：
 *  返回500状态码和错误信息
 *  
 */
router.post('/name',(req,res)=>{
    let {user}=req.body
    //匹配元素个数
    //countDocuments匹配方法
    User.countDocuments({name:user},(err,doc)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.json({
                status:200,
                doc
            })
        }
    })
})
//验证邮箱是否已被注册
/**
 * @api {POST} /user/email 注册验证邮箱接口
 * @apiName email
 * @apiGroup User
 * 
 * @apiParam (请求参数) {String} email 邮箱
 * @apiParamExample {json} 请求参数示例:
 *  {
 *      email:'zs'//邮箱
 *  }
 * 
 * @apiSuccess (成功返回) {Object} obj 包含状态码和邮箱状态
 * @apiSuccessExample {josn} 成功返回信息：
 * {
 *  status: 200,//成功状态码
 *  doc: '0或1',//1代表已有邮箱，0代表邮箱可用
 * }
 * 
 * @apiErrorExample {String} 错误返回信息：
 *  返回500状态码和错误信息
 *  
 */
router.post('/email',(req,res)=>{
    let {email}=req.body
    //匹配元素个数
    //countDocuments匹配方法
    User.countDocuments({email:email},(err,doc)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.json({
                status:200,
                doc
            })
        }
    })
})


//登录接口
/**
 * @api {POST} /user/login 登录接口
 * @apiName login
 * @apiGroup User
 * 
 * @apiParam (请求参数) {String} user 用户名或邮箱
 * @apiParam (请求参数) {String} psw 密码
 * @apiParamExample {json} 请求参数示例:
 *  {
 *      user:'123@qq.com'，//用户名
 *      psw:'12312' //密码
 *  }
 * 
 * @apiSuccess (成功返回) {Object} obj 包含状态码和用户名状态
 * @apiSuccessExample {josn} 成功返回信息：
 * {
 *  status: 200,//成功状态码
 *  doc: {},//用户信息
 * }
 * 
 * @apiErrorExample {String} 错误返回信息：
 *  返回500状态码和错误信息
 *  or
 *  res.send({status:400,'doc':'用户名或密码错误'})
 *  
 */
router.post('/login',(req,res)=>{
    let {user,pwd}=req.body
    User.find({$or:[
        {'name':user},
        {'email':user}
    ]},{'name':1,'imgurl':1,'psw':1},function(err,doc){
        if(err){
            res.status(500).send(err);
        }else{
            if(doc==''){
                res.send({status:400,'doc':'用户名或密码错误'})
            }else{
                let hashpwd=bcrypt.hashSync(pwd,salt)
                if(doc[0].pwd==hashpwd){
                    res.json({
                        status:200,
                        doc
                    })
                }else{
                    res.send({status:400,'doc':'用户名或密码错误'})
                }
            }
        }
    })
})


module.exports=router