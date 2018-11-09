const CONF = {
    //浏览器访问端口
    port: '3000',

    //MySQL 配置
    mysql: {
        host: '192.168.0.63',
        user: 'shawanning',
        password: '123456',
        port: '3306',
        database: 'userCollection',
        connectTimeout: 3000,
        dateStrings: false
    }
}

module.exports = CONF
