/* eslint-disable camelcase */
const mysql = require('mysql')
const config = require('../config.js')
const $createMap = require('../databases/map/createMap.js')
const $updateMap = require('../databases/map/updateMap.js')
const $searchMap = require('../databases/map/searchMap.js')
const $deleteMap = require('../databases/map/deleteMap.js')

//创建数据库
const pool = mysql.createPool({
    host: config.mysql.host,
    port: config.mysql.port,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
    connectTimeout: config.mysql.connectTimeout,
    dateStrings: config.mysql.dateStrings
})

//连接数据库
const query = function (sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

// 新增用户
const createUser = function (options) {
    // sql语句，sql参数

    return query($createMap, [userName, sex, age, provinceId, cityId, psw])
}

module.exports = {
    createUser
}
