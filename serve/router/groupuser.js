var express=require('express');
var router=express.Router();
//引入数据库模块
var GroupUser=require('../model/GroupUser');

//判断是否在群里
/**
 * @api {GET} /groupuser/isInGroup 判断是否在群里(/isInGroup)
 * @apiName isInGroup
 * @apiGroup groupuser
 * 
 * @apiParam (请求参数) {String} uid 当前用户id
 * @apiParam (请求参数) {String} groupId 群id
 * @apiParamExample {json} 请求参数示例:
 *  {
 *      uid:'24fsdm'//当前用户id
 *      fid:'24fsdm'//其他用户id
 *  }
 * 
 * @apiSuccess (成功返回) {Object} obj 状态码200为是在群里400未在群里
 * @apiSuccessExample {josn} 成功返回信息：
 * {
 *  status: 200或400,//200为是在群里400未在群里
 *  
 * }
 * 
 * @apiErrorExample {String} 错误返回信息：
 *  返回500状态码和错误信息
 *  
 */
router.get('/isInGroup',(req,res)=>{
    let {uid,groupId}=req.query
    let wherestr={'userID':uid,'groupId':groupId}
    GroupUser.findOne(wherestr,(err,doc)=>{
        if(err){
            res.status(500).send(err);
        }else{
            if(doc){
                //是在群里
                res.json({
                    status:200
                })
            }else{
                //不是在群里
                res.send({status:400})
            }
        }
    })
})

module.exports=router