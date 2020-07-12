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

## 数据库
`使用MongoDB数据库`

数据库名称`chat`

### 数据集合

1. 用户集合

字段|属性|描述
--| --|--|
id|ObjectID|主键id
用户名|String|用户名
邮箱|String|邮箱
邮箱|String|邮箱
邮箱|enum|性别
邮箱|String|生日
邮箱|Nubmer|电话
邮箱|String|密码
邮箱|date|注册时间
邮箱|String|签名
邮箱|String|头像链接
邮箱|String|用户等级(0,1,2...)

2. 好友集合

字段|属性|描述
--| --|--|
id|ObjectID|主键id
用户id|String|用户id
用户id|String|好友id
邮箱|date|生成时间
邮箱|enum|好友状态（0表示已为好友，1表示申请中，2表示申请发送方对方还未同意）
邮箱|String|头像链接

3. 群集合

字段|属性|描述
--| --|--|
id|ObjectID|主键id
用户名|String|群主ID
邮箱|String|群名
邮箱|String|群封面链接
邮箱|enum|群公告
邮箱|String|群建立时间

4. 群信息集合

字段|属性|描述
--| --|--|
id|ObjectID|主键id
用户名|String|群ID
邮箱|String|发送者id
邮箱|String|发送内容
邮箱|enum|内容类型（0文字，1图片连接，2音频连接...）
邮箱|String|发送时间

5. 群成员集合

字段|属性|描述
--| --|--|
id|ObjectID|主键id
用户名|String|群ID
邮箱|String|用户id
邮箱|String|群内名
邮箱|enum|加入时间
邮箱|String|群建立时间
邮箱|String|未读消息数
邮箱|String|是否屏蔽群消息(0不屏蔽,1屏蔽)

6. 一对一信息集合

字段|属性|描述
--| --|--|
id|ObjectID|逐渐id
id|ObjectID|发送者id
用户id|String|接收者id
用户id|String|发送内容
邮箱|enum|内容类型（0文字，1图片连接，2音频连接...）
邮箱|String|发送时间
邮箱|enum|消息状态（0已读，1未读）

