const util = require('../middlewares/util')

exports.content = async (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = util.resSuccessObj(1, 'content success');
}
