//sql map
module.exports = {
    user: {
        select_user: 'SELECT * from userInfo',
        isExistUser: 'SELECT * FROM userInfo WHERE userName = ?',
        createUser: 'INSERT INTO userInfo(userName,sex,age,provinceId,cityId,psw) VALUES (?,?,?,?,?,?)'
    }
}
