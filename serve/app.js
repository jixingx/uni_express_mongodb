var express=require('express')

var app=express();
var bodyParser=require('body-parser')


//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials","true");
    next();
});



//配置body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//设置静态目录
app.use(express.static('./public'))

//验证token是否过期并规定哪些路由不用验证
const expressJwt=require('express-jwt');
let secret="chartshiguang"
app.use(expressJwt({
    secret: secret,
    algorithms: ["HS256"] 
}).unless({
    path: ['/user/register' ,'/user/login']//除了这个地址，其他的URL都需要验证
}));
// app.get('/',function(req,res){
//     res.send('hello')
// })




//配置路由
var ceshi=require('./router/ceshi')
var user=require('./router/user')
var friend=require('./router/friend')
var group=require('./router/group')
var groupuser=require('./router/groupuser')
app.use('/ceshi',ceshi)
app.use('/user',user)
app.use('/friend',friend)
app.use('/group',group)
app.use('/groupuser',groupuser)



//处理404
app.use(function(req,res,next){
    let err=new Error('Not Found');
    err.status=404;
    next(err)
})
//处理错误信息
app.use(function(err,req,res,next){
    res.status(err.status || 500)
    res.send(err.message)
})

app.listen(3000)