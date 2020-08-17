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
// let poyload={name:'张三',admin:true}
// let secret="chartshiguang"
// let token=jwt.sign(poyload,secret,{expiresIn:3600*24*120})
//解析token
// let payload=jwt.verify(token,secret)
// console.log(payload)

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
 * @api {POST} /user/register 注册接口(/register)
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
    // console.log(user,email,hash)
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
 * @api {POST} /user/name 注册验证用户接口(/name)
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
 * @api {POST} /user/email 注册验证邮箱接口(/email)
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
 * @api {POST} /user/login 登录接口(/login)
 * @apiName login
 * @apiGroup User
 * 
 * @apiParam (请求参数) {String} user 用户名或邮箱
 * @apiParam (请求参数) {String} pwd 密码
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
 *  back: {//用户信息
 *      id:doc[0]._id,//用户id
 *      name:doc[0].name,//用户名
 *      imgurl:doc[0].imgurl,用户图片
 *      token:token//token
 *  },
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
                let verif=bcrypt.compareSync(pwd,doc[0].psw)
                // console.log(verif)
                if(verif){
                    let poyload={id:doc[0]._id}
                    let secret="chartshiguang"
                    let token=jwt.sign(poyload,secret,{expiresIn:3600*24*120})
                    let back={
                        id:doc[0]._id,
                        name:doc[0].name,
                        imgurl:doc[0].imgurl,
                        token:token
                    }
                    res.json({
                        status:200,
                        back
                    })
                }else{
                    res.send({status:400,'doc':'用户名或密码错误'})
                }
            }
        }
    })
})
//搜索用户
/**
 * @api {POST} /user/searchUser 用户搜索接口(/searchUser)
 * @apiName searchUser
 * @apiGroup User
 * 
 * @apiParam (请求参数) {String} user 用户名或邮箱
 * @apiParamExample {json} 请求参数示例:
 *  {
 *      user:'123@qq.com'，//用户名或邮箱
 *  }
 * 
 * @apiSuccess (成功返回) {Object} obj 包含状态码和用户名状态
 * @apiSuccessExample {josn} 成功返回信息：
 * {
 *  status: 200,//成功状态码
 *  doc: {//用户信息
 *      name:doc[0].name,//用户名
 *      email:doc[0].email,//用户邮箱
 *      imgurl:doc[0].imgurl,用户图片
 *  },
 * }
 * 
 * @apiErrorExample {String} 错误返回信息：
 *  返回500状态码和错误信息
 *  
 */
router.post('/searchUser',(req,res)=>{
    let wherestr
    if(JSON.stringify(req.body)=="{}"){
        wherestr={}
    }else{
        wherestr={$or:[
            {'name':{$regex:req.body.user}},//模糊搜索
            {'email':{$regex:req.body.user}}
        ]}
    }
    User.find(wherestr,{'name':1,'email':1,'imgurl':1},function(err,doc){
        if(err){
            res.status(500).send(err);
        }else{
            res.send({status:200,doc})
        }
    })
})

//用户详情
/**
 * @api {GET} /user/userDetial 用户详情(/userDetial)
 * @apiName userDetial
 * @apiGroup User
 * 
 * @apiParam (请求参数) {String} id id值
 * @apiParamExample {json} 请求参数示例:
 *  {
 *      id:'213312132'，//id值
 *  }
 * 
 * @apiSuccess (成功返回) {Object} obj 包含状态码和用户名状态
 * @apiSuccessExample {josn} 成功返回信息：
 * {
 *  status: 200,//成功状态码
 *  doc: {//用户信息
 *      name:doc.name,//用户名
 *      email:doc.email,//用户邮箱
 *      imgurl:doc.imgurl,用户图片
 *      ...
 *  },
 * }
 * 
 * @apiErrorExample {String} 错误返回信息：
 *  返回500状态码和错误信息
 *  
 */
router.get('/userDetial',(req,res)=>{
    let wherestr={'_id':req.query.id}
    let out={'pwd':0}
    User.findOne(wherestr,out,function(err,doc){
        if(err){
            res.status(500).send(err);
        }else{
            res.send({status:200,doc})
        }
    })
})

//用户修改
/**
 * @api {POST} /user/userUpdate 用户修改(/userUpdate)
 * @apiName userUpdate
 * @apiGroup User
 * 
 * @apiParam (请求参数) {String} id id值
 * @apiParam (请求参数) {String} pwd 原密码
 * @apiParam (请求参数) {String} psw 新密码
 * @apiParamExample {json} 请求参数示例:
 *  {
 *      id:'213312132'，//id值
 *      pwd:'123456'，//原密码
 *      psw:'654321'，//新密码
 *  }
 * 
 * @apiSuccess (成功返回) {Object} obj 包含状态码和用户名状态
 * @apiSuccessExample {josn} 成功返回信息：
 * {
 *  status: 200,//成功状态码
 *  doc: {//用户信息
 *      name:doc[0].name,//用户名
 *      email:doc[0].email,//用户邮箱
 *      imgurl:doc[0].imgurl,用户图片
 *      ...
 *  },
 * }
 * 
 * @apiErrorExample {String} 错误返回信息：
 *  返回500状态码和错误信息
 *  or
 *  返回400状态码表示密码匹配失败
 *  
 */
router.post('/userUpdate',(req,res)=>{
    let updatestr={}
    //判断是否有密码
    if(typeof(req.body.pwd)!='undefined'){
        //有密码进行匹配
        User.find({'_id':req.body.id},function(err,doc){
            if(err){
                res.status(500).send(err);
            }else{
                let verif=bcrypt.compareSync(req.body.pwd,doc[0].psw)
                if(verif){
                    //密码验证成功
                    //密码加密
                    let hash=bcrypt.hashSync(req.body.psw,salt)
                    User.updateOne({'_id':req.body.id},{'psw':hash},function(error,result){
                        if(error){
                            //修改失败
                            res.send({status:500})
                        }else{
                            //修改成功
                            res.send({status:200})
                        }
                    })
                }else{
                    //密码匹配失败
                    res.send({status:400})
                }
            }
        })
    }
})


module.exports=router