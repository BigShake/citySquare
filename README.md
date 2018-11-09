# 通过koa框架搭建

├── app.js  文件入口
├── config.js   配置文件
├── controllers 业务处理层
│   ├── content.js  其他业务
│   ├── index.js    业务层映射
│   ├── login.js    登录管理
│   ├── readme.md   帮助文档
│   └── user.js 用户管理
├── databases   数据操作层
│   ├── createMap.js    新增操作sql
│   ├── deleteMap.js    删除操作sql
│   ├── initdb.js   数据库初始化执行脚本
│   ├── initdb.sql  数据库初始化sql
│   ├── readme.md   帮助文档
│   ├── searchMap.js    查询sql
│   └── updateMap.js    更新sql
├── middlewares 中间件
│   ├── readme.md   帮助文档
│   └── response.js 响应处理
├── package.json    
├── README.md  
└── routes  路由管理层
    ├── index.js    路由配置文件
    └── readme.md   帮助文档

# 功能
- 创建用户
- 更新用户
- 