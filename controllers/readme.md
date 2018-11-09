# 业务控制层

- index.js
映射 controllers 文件夹下的文件为模块.
如 controllers 中的文件将会被映射成如下的结构：
```
// index.js 输出
{
    login: require('login'),
    user: require('user'),
    content: require('content')
}
```