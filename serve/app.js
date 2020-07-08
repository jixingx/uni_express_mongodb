var express=require('express')

var app=express();
var bodyParser=require('body-parser')


//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

//配置body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//设置静态目录
app.use(express.static('./public'))

app.get('/',function(req,res){
    res.send('hello')
})

//配置路由
var ceshi=require('./router/ceshi')
app.use('/ceshi',ceshi)

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