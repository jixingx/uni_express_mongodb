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

// module.exports=mongoose.model('Message',MessageSchema)


// module.exports=mongoose.model('GroupMsg',GroupMsgSchema)

