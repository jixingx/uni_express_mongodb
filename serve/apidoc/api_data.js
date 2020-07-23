define({ "api": [
  {
    "type": "POST",
    "url": "/user/email",
    "title": "注册验证邮箱接口",
    "name": "email",
    "group": "User",
    "parameter": {
      "examples": [
        {
          "title": "请求参数:",
          "content": "{\n    email:'zs'//邮箱\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回信息：",
          "content": "{\n status: 200,//成功状态码\n doc: '0或1',//1代表已有邮箱，0代表邮箱可用\n}",
          "type": "josn"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误返回信息：",
          "content": "返回500状态码和错误信息",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/user.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/name",
    "title": "注册验证用户接口",
    "name": "name",
    "group": "User",
    "parameter": {
      "examples": [
        {
          "title": "请求参数:",
          "content": "{\n    user:'123@qq.com'//用户名\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回信息：",
          "content": "{\n status: 200,//成功状态码\n doc: '0或1',//1代表已有用户，0代表账户可注册\n}",
          "type": "josn"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误返回信息：",
          "content": "返回500状态码和错误信息",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/user.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/register",
    "title": "注册接口",
    "name": "register",
    "group": "User",
    "parameter": {
      "examples": [
        {
          "title": "请求参数:",
          "content": "{\n    user:'zs',//用户名\n    email:'123@qq.com',//邮箱\n    psw:'123'//密码\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回信息：",
          "content": "{\n sex: 'asexual',//性别\n imgurl: 'user.png',//头像地址\n _id: 5f18e65abab98d5ba00689f5,//id\n name: 'jixing',//用户名\n email: '1544916656@qq.com',//邮箱\n psw: '$2a$10$fi7fYIbII1TcqbQertVBIuZgQhd2M2Al4dr6.rSuIr/A4CPSbTYuG',//密码\n time: 2020-07-23T01:22:34.359Z,//注册时间\n}",
          "type": "josn"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误返回信息：",
          "content": "返回500状态码和错误信息",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/user.js",
    "groupTitle": "User"
  }
] });
