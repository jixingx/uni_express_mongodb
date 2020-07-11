const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/chat',{ useUnifiedTopology: true,useNewUrlParser: true }).then((res)=>{
    console.log('数据库连接成功')
}).catch((err)=>{
    console.log(err)
})

const UserSchema=new mongoose.Schema();

module.exports=mongoose.model('User',UserSchema)