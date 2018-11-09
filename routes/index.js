/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
    prefix: '/weapp'
})
const controllers = require('../controllers')

router.get('/', (ctx, next) => {
    ctx.body = 'Hello World!';
  })

// 登录接口
router.post('/login', controllers.login.login)

// 用户接口
router.post('/user', controllers.user.user)
//创建用户信息
router.post('/createUser', controllers.user.createUser)
//更新用户信息
router.post('/updateUser', controllers.user.updateUser)

//content接口
router.post('/content', controllers.content.content)

module.exports = router
