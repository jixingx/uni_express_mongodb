const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/chat',{ useUnifiedTopology: true,useNewUrlParser: true }).then((res)=>{
    console.log('数据库连接成功')
}).catch((err)=>{
    console.log(err)
})

//群成员集合
const GroupUserSchema=new mongoose.Schema({
    groupId:{//群ID
        type:mongoose.Schema.Types.ObjectId,
        ref:"Group"
    },
    userId:{//用户ID
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    name:{//群内名称
        type:String
    },
    tip:{//未读消息数
        type:Number,
        default:0
    },
    time:{//加入时间
       type:Date 
    },
    buildTime:{//群建立时间
        type:Date
    },
    shield:{//是否屏蔽群消息(0不屏蔽,1屏蔽)
        type:Number 
    }
});

module.exports=mongoose.model('GroupUser',GroupUserSchema)