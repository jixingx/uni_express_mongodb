# 聊天项目

## 前端

### 使用框架和技术
1. uni-app

## 后台

### 使用框架和技术

1. node 
2. express
3. body-parser(处理post提交的数据)
4. mongoose(连接数据库)
5. nodemailer(链接邮箱)
6. bcryptjs(密码加密)
7. apidoc(书写接口文档)
8. jsonwebtoken(生成和解析token)
9. express-jwt(控制哪些路径不用携带token)

## 数据库
`使用MongoDB数据库`

数据库名称`chat`

### 数据集合

1. 用户集合`User`

字段|属性|描述
--| --|--|
id|ObjectID|主键id
name|String|用户名
psw|String|密码
email|String|邮箱
sex|String|性别
birth|Date|生日
Phone|Nubmer|电话
time|date|注册时间
explain|String|签名
imgurl|String|头像链接
grade|Number|用户等级(0,1,2...)

2. 好友集合`Friend`

字段|属性|描述
--| --|--|
id|ObjectID|主键id
userId|ObjectId|用户id
friendID|ObjectId|好友id
time|date|生成时间
state|String|好友状态（0表示已为好友，1表示申请中，2表示申请发送方对方还未同意）

3. 群集合`Group`

字段|属性|描述
--| --|--|
id|ObjectID|主键id
userId|ObjectId|群主ID
name|String|群名
imgurl|String|群封面链接
notice|String|群公告
time|Date|群建立时间

4. 群信息集合

字段|属性|描述
--| --|--|
id|ObjectID|主键id
groupId|ObjectId|群ID
userId|ObjectId|发送者id
message|String|发送内容
types|String|内容类型（0文字，1图片连接，2音频连接...）
time|Date|发送时间

5. 群成员集合`GroupUser`

字段|属性|描述
--| --|--|
id|ObjectID|主键id
groupId|String|群ID
userId|String|用户id
name|String|群内名
time|Date|加入时间
buildTime|Date|群建立时间
tip|Number|未读消息数
shield|Number|是否屏蔽群消息(0不屏蔽,1屏蔽)

6. 一对一信息集合`Message`

字段|属性|描述
--| --|--|
id|ObjectID|主键id
userId|ObjectID|发送者id
friendID|ObjectID|接收者id
message|String|发送内容
types|String|内容类型（0文字，1图片连接，2音频连接...）
time|Date|发送时间
state|Number|消息状态（0已读，1未读）

