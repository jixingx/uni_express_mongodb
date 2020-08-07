var express=require('express');
var router=express.Router();
//引入数据库模块
var Group=require('../model/Group');

//搜索群
/**
 * @api {POST} /group/searchGroup 搜索群(/searchGroup)
 * @apiName isFriend
 * @apiGroup group
 * 
 * @apiParam (请求参数) {String} name 群名字
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
 *  doc:{
 *      name:'',//群组那个字
 *      imgurl:'',//群图片
 *  }
 * }
 * 
 * @apiErrorExample {String} 错误返回信息：
 *  返回500状态码和错误信息
 *  
 */
router.post('/searchGroup',(req,res)=>{
    let wherestr
    if(JSON.stringify(req.body)=="{}"){
        wherestr={}
    }else{
        wherestr={$or:[
            {'name':{$regex:req.body.name}}//模糊搜索
        ]}
    }
    Group.find(wherestr,{'name':1,'imgurl':1},function(err,doc){
        if(err){
            res.status(500).send(err);
        }else{
            res.send({status:200,doc})
        }
    })
})

module.exports=router