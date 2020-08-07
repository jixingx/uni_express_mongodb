const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/chat',{ useUnifiedTopology: true,useNewUrlParser: true }).then((res)=>{
    console.log('数据库连接成功')
}).catch((err)=>{
    console.log(err)
})

//好友集合
const FriendSchema=new mongoose.Schema({
    userId:{//用户id
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    friendID:{//好友ID
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    state:{//好友状态（0表示已为好友，1表示申请中，2表示申请发送方对方还未同意）
        type:String
    },
    markname:{//好友昵称
      type:String 
    },
    time:{//生成时间
       type:Date 
    }
});

module.exports=mongoose.model('Friend',FriendSchema)