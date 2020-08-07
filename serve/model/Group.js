const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/chat',{ useUnifiedTopology: true,useNewUrlParser: true }).then((res)=>{
    console.log('数据库连接成功')
}).catch((err)=>{
    console.log(err)
})

//群集合
const GroupSchema=new mongoose.Schema({
    userId:{//群主ID
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    name:{//群名称
        type:String
    },
    imgurl:{//群封面链接
        type:String,
        default:'group.png'
    },
    time:{//群建立时间
       type:Date 
    },
    notice:{//群公告
        type:String 
    }
});

module.exports=mongoose.model('Group',GroupSchema)