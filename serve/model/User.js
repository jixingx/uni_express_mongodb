const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/chat',{ useUnifiedTopology: true,useNewUrlParser: true }).then((res)=>{
    console.log('数据库连接成功')
}).catch((err)=>{
    console.log(err)
})

//用户集合
const UserSchema=new mongoose.Schema({
    name:{//用户名
        type:String
    },
    psw:{//密码
        type:String
    },
    email:{//邮箱
        type:String
    },
    sex:{//性格
        type:String,
        default:'asexual'
    },
    birth:{//生日
        type:Date
    },
    Phone:{//电话
        type:Number
    },
    explain:{//签名
        type:String
    },
    imgurl:{//头像链接
        type:String,
        default:'user.png'
    },
    time:{//注册时间
       type:Date 
    },
    grade:{//用户等级
        type:Number
    }
});

//好友集合
// const FriendSchema=new mongoose.Schema({
//     userId:{//用户id
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User"
//     },
//     friendID:{//好友ID
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User"
//     },
//     state:{//好友状态（0表示已为好友，1表示申请中，2表示申请发送方对方还未同意）
//         type:String
//     },
//     markname:{//好友昵称
//       type:String 
//     },
//     time:{//生成时间
//        type:Date 
//     }
// });

//一对一消息集合
// const MessageSchema=new mongoose.Schema({
//     userId:{//用户id
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User"
//     },
//     friendID:{//好友ID
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User"
//     },
//     message:{//发送内容
//         type:String
//     },
//     types:{//内容类型（0文字，1图片连接，2音频连接...）
//         type:String
//     },
//     time:{//发送时间
//        type:Date 
//     },
//     state:{//消息状态（0已读，1未读）
//         type:Number 
//     }
// });

//群集合
// const GroupSchema=new mongoose.Schema({
//     userId:{//群主ID
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User"
//     },
//     name:{//群名称
//         type:String
//     },
//     imgurl:{//群封面链接
//         type:String,
//         default:'group.png'
//     },
//     time:{//群建立时间
//        type:Date 
//     },
//     notice:{//群公告
//         type:String 
//     }
// });

//群成员集合
// const GroupUserSchema=new mongoose.Schema({
//     groupId:{//群ID
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"Group"
//     },
//     userId:{//用户ID
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User"
//     },
//     name:{//群内名称
//         type:String
//     },
//     tip:{//未读消息数
//         type:Number,
//         default:0
//     },
//     time:{//加入时间
//        type:Date 
//     },
//     buildTime:{//群建立时间
//         type:Date
//     },
//     shield:{//是否屏蔽群消息(0不屏蔽,1屏蔽)
//         type:Number 
//     }
// });

//群信息集合
// const GroupMsgSchema=new mongoose.Schema({
//     groupId:{//群ID
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"Group"
//     },
//     userId:{//发送者id
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User"
//     },
//     message:{//发送内容
//         type:String
//     },
//     types:{//内容类型（0文字，1图片连接，2音频连接...）
//         type:String
//     },
//     time:{//发送时间
//        type:Date 
//     }
// });

module.exports=mongoose.model('User',UserSchema)
// module.exports=mongoose.model('Friend',FriendSchema)
// module.exports=mongoose.model('Message',MessageSchema)
// module.exports=mongoose.model('Group',GroupSchema)
// module.exports=mongoose.model('GroupUser',GroupUserSchema)
// module.exports=mongoose.model('GroupMsg',GroupMsgSchema)

