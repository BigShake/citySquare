const util = require('../middlewares/util')
const mysql = require('../databases/mysql')

exports.user = async (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = util.resSuccessObj(1, 'user success');
}

exports.createUser = async (ctx, next) => {
    console.log(ctx.request.body);
    let userInfo = ctx.request.body;
    if(!userInfo){
        ctx.status = 200;
        ctx.body = util.incompleteParame();
        return;
    }

    /**
        {
            "open_id": "1",
            "uuid": "2",
            "skey": "3",
            "create_time": "4",
            "last_visit_time": "5",
            "session_key": "6",
            "user_info": "7"
        }
     */
    //先查询该用户是否存在，存在则更新访问时间
    //不存在则新插入用户
    await mysql.createUser(userInfo);
    ctx.body = util.resSuccessObj(1, 'user success');
}

exports.updateUser = async (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = util.resSuccessObj(1, 'user success');
}