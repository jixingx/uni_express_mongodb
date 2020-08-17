define({ "api": [
  {
    "type": "POST",
    "url": "/user/email",
    "title": "注册验证邮箱接口(/email)",
    "name": "email",
    "group": "User",
    "parameter": {
      "fields": {
        "请求参数": [
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "{\n    email:'zs'//邮箱\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "成功返回": [
          {
            "group": "成功返回",
            "type": "Object",
            "optional": false,
            "field": "obj",
            "description": "<p>包含状态码和邮箱状态</p>"
          }
        ]
      },
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
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/user/email"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/user/login",
    "title": "登录接口(/login)",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "请求参数": [
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>用户名或邮箱</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "{\n    user:'123@qq.com'，//用户名\n    psw:'12312' //密码\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "成功返回": [
          {
            "group": "成功返回",
            "type": "Object",
            "optional": false,
            "field": "obj",
            "description": "<p>包含状态码和用户名状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回信息：",
          "content": "{\n status: 200,//成功状态码\n back: {//用户信息\n     id:doc[0]._id,//用户id\n     name:doc[0].name,//用户名\n     imgurl:doc[0].imgurl,用户图片\n     token:token//token\n },\n}",
          "type": "josn"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误返回信息：",
          "content": "返回500状态码和错误信息\nor\nres.send({status:400,'doc':'用户名或密码错误'})",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/user.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/user/login"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/user/name",
    "title": "注册验证用户接口(/name)",
    "name": "name",
    "group": "User",
    "parameter": {
      "fields": {
        "请求参数": [
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>名字</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "{\n    user:'123@qq.com'//用户名\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "成功返回": [
          {
            "group": "成功返回",
            "type": "Object",
            "optional": false,
            "field": "obj",
            "description": "<p>包含状态码和用户名状态</p>"
          }
        ]
      },
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
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/user/name"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/user/register",
    "title": "注册接口(/register)",
    "name": "register",
    "group": "User",
    "parameter": {
      "fields": {
        "请求参数": [
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>名字</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "psw",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "{\n    user:'zs',//用户名\n    email:'123@qq.com',//邮箱\n    psw:'123'//密码\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "成功返回": [
          {
            "group": "成功返回",
            "type": "Object",
            "optional": false,
            "field": "obj",
            "description": "<p>用户信息</p>"
          }
        ]
      },
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
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/user/register"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/user/searchUser",
    "title": "用户搜索接口(/searchUser)",
    "name": "searchUser",
    "group": "User",
    "parameter": {
      "fields": {
        "请求参数": [
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>用户名或邮箱</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "{\n    user:'123@qq.com'，//用户名或邮箱\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "成功返回": [
          {
            "group": "成功返回",
            "type": "Object",
            "optional": false,
            "field": "obj",
            "description": "<p>包含状态码和用户名状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回信息：",
          "content": "{\n status: 200,//成功状态码\n doc: {//用户信息\n     name:doc[0].name,//用户名\n     email:doc[0].email,//用户邮箱\n     imgurl:doc[0].imgurl,用户图片\n },\n}",
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
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/user/searchUser"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/user/userDetial",
    "title": "用户详情(/userDetial)",
    "name": "userDetial",
    "group": "User",
    "parameter": {
      "fields": {
        "请求参数": [
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id值</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "{\n    id:'213312132'，//id值\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "成功返回": [
          {
            "group": "成功返回",
            "type": "Object",
            "optional": false,
            "field": "obj",
            "description": "<p>包含状态码和用户名状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回信息：",
          "content": "{\n status: 200,//成功状态码\n doc: {//用户信息\n     name:doc.name,//用户名\n     email:doc.email,//用户邮箱\n     imgurl:doc.imgurl,用户图片\n     ...\n },\n}",
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
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/user/userDetial"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/user/userUpdate",
    "title": "用户修改(/userUpdate)",
    "name": "userUpdate",
    "group": "User",
    "parameter": {
      "fields": {
        "请求参数": [
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id值</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>原密码</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "psw",
            "description": "<p>新密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "{\n    id:'213312132'，//id值\n    pwd:'123456'，//原密码\n    psw:'654321'，//新密码\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "成功返回": [
          {
            "group": "成功返回",
            "type": "Object",
            "optional": false,
            "field": "obj",
            "description": "<p>包含状态码和用户名状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回信息：",
          "content": "{\n status: 200,//成功状态码\n doc: {//用户信息\n     name:doc[0].name,//用户名\n     email:doc[0].email,//用户邮箱\n     imgurl:doc[0].imgurl,用户图片\n     ...\n },\n}",
          "type": "josn"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误返回信息：",
          "content": "返回500状态码和错误信息\nor\n返回400状态码表示密码匹配失败",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/user.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/user/userUpdate"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/friend/friendMarkName",
    "title": "修改好友昵称(/friendMarkName)",
    "name": "friendMarkName",
    "group": "friend",
    "parameter": {
      "fields": {
        "请求参数": [
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>自己id值</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "fid",
            "description": "<p>好友id值</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>昵称</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "{\n    id:'213312132'，//自己id值\n    fid:'32433'，//好友id值\n    name:'zs'，//昵称\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "成功返回": [
          {
            "group": "成功返回",
            "type": "Object",
            "optional": false,
            "field": "obj",
            "description": "<p>状态码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回信息：",
          "content": "{\n status: 200//成功状态码\n}",
          "type": "josn"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误返回信息：",
          "content": "返回500状态码",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/friend.js",
    "groupTitle": "friend",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/friend/friendMarkName"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/friend/getMarkName",
    "title": "用户详情(/getMarkName)",
    "name": "getMarkName",
    "group": "friend",
    "parameter": {
      "fields": {
        "请求参数": [
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>自己id值</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "fid",
            "description": "<p>好友id值</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "{\n    uid:'213312132'，//自己id值\n    fid:'123123123'//好友id值\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "成功返回": [
          {
            "group": "成功返回",
            "type": "Object",
            "optional": false,
            "field": "obj",
            "description": "<p>包含状态码和好友昵称</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回信息：",
          "content": "{\n status: 200,//成功状态码\n doc: {\n     markname:doc.markname,//好友昵称\n },\n}",
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
    "filename": "router/friend.js",
    "groupTitle": "friend",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/friend/getMarkName"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/friend/isFriend",
    "title": "判断是否为好友(/isFriend)",
    "name": "isFriend",
    "group": "friend",
    "parameter": {
      "fields": {
        "请求参数": [
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>当前用户id</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "fid",
            "description": "<p>其他用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "{\n    uid:'24fsdm'//当前用户id\n    fid:'24fsdm'//其他用户id\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "成功返回": [
          {
            "group": "成功返回",
            "type": "Object",
            "optional": false,
            "field": "obj",
            "description": "<p>状态码200为是好友400未找到不是好友</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回信息：",
          "content": "{\n status: 200或400,//200为是好友400未找到不是好友\n \n}",
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
    "filename": "router/friend.js",
    "groupTitle": "friend",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/friend/isFriend"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/group/searchGroup",
    "title": "搜索群(/searchGroup)",
    "name": "isFriend",
    "group": "group",
    "parameter": {
      "fields": {
        "请求参数": [
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>群名字</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "{\n    uid:'24fsdm'//当前用户id\n    fid:'24fsdm'//其他用户id\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "成功返回": [
          {
            "group": "成功返回",
            "type": "Object",
            "optional": false,
            "field": "obj",
            "description": "<p>状态码200为是好友400未找到不是好友</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回信息：",
          "content": "{\n status: 200或400,//200为是好友400未找到不是好友\n doc:{\n     name:'',//群组那个字\n     imgurl:'',//群图片\n }\n}",
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
    "filename": "router/group.js",
    "groupTitle": "group",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/group/searchGroup"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/groupuser/isInGroup",
    "title": "判断是否在群里(/isInGroup)",
    "name": "isInGroup",
    "group": "groupuser",
    "parameter": {
      "fields": {
        "请求参数": [
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>当前用户id</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>群id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例:",
          "content": "{\n    uid:'24fsdm'//当前用户id\n    fid:'24fsdm'//其他用户id\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "成功返回": [
          {
            "group": "成功返回",
            "type": "Object",
            "optional": false,
            "field": "obj",
            "description": "<p>状态码200为是在群里400未在群里</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回信息：",
          "content": "{\n status: 200或400,//200为是在群里400未在群里\n \n}",
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
    "filename": "router/groupuser.js",
    "groupTitle": "groupuser",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/groupuser/isInGroup"
      }
    ]
  }
] });
