var express=require('express');
var router=express.Router();
//引入数据库模块
var Friend=require('../model/Friend');

//判断是否为好友
/**
 * @api {GET} /friend/isFriend 判断是否为好友(/isFriend)
 * @apiName isFriend
 * @apiGroup friend
 * 
 * @apiParam (请求参数) {String} uid 当前用户id
 * @apiParam (请求参数) {String} fid 其他用户id
 * @apiParamExample {json} 请求参数示例:
 *  {
 *      uid:'24fsdm'//当前用户id
 *      fid:'24fsdm'//其他用户id
 *  }
 * 
 * @apiSuccess (成功返回) {Object} obj 状态码200为是好友400未找到不是好友
 * @apiSuccessExample {josn} 成功返回信息：
 * {
 *  status: 200或400,//200为是好友400未找到不是好友
 *  
 * }
 * 
 * @apiErrorExample {String} 错误返回信息：
 *  返回500状态码和错误信息
 *  
 */
router.get('/isFriend',(req,res)=>{
    let {uid,fid}=req.query
    let wherestr={'userID':uid,'friendID':fid,'state':0}
    Friend.findOne(wherestr,(err,doc)=>{
        if(err){
            res.status(500).send(err);
        }else{
            if(doc){
                //是好友
                res.json({
                    status:200
                })
            }else{
                //不是好友
                res.send({status:400})
            }
        }
    })
})

//修改好友昵称
/**
 * @api {POST} /user/friendMarkName 修改好友昵称(/friendMarkName)
 * @apiName friendMarkName
 * @apiGroup friend
 * 
 * @apiParam (请求参数) {String} uid 自己id值
 * @apiParam (请求参数) {String} fid 好友id值
 * @apiParam (请求参数) {String} name 昵称
 * @apiParamExample {json} 请求参数示例:
 *  {
 *      id:'213312132'，//自己id值
 *      fid:'32433'，//好友id值
 *      name:'zs'，//昵称
 *  }
 * 
 * @apiSuccess (成功返回) {Object} obj 状态码
 * @apiSuccessExample {josn} 成功返回信息：
 * {
 *  status: 200//成功状态码
 * }
 * 
 * @apiErrorExample {String} 错误返回信息：
 *  返回500状态码
 *  
 */
router.post('/friendMarkName',(req,res)=>{
    let wherestr={'userID':req.body.uid,'friendID':req.body.fid}
    let updatestr={'markname':req.body.name}
    //判断是否有密码
    Friend.updateOne(wherestr,updatestr,function(err,result){
        if(error){
            //修改失败
            res.send({status:500})
        }else{
            //修改成功
            res.send({status:200})
        }
    })
})


module.exports=router