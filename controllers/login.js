const util = require('../middlewares/util')

exports.login = async (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = util.resSuccessObj(1, 'login success');
}

