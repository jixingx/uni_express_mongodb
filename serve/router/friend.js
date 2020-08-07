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

module.exports=router