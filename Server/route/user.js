const express = require('express')
const user = require('../route_handler/user')

//创建路由对象
const router = express.Router()
//引入中间件
const isLogin = user.isLogin

//用户注册s
router.post('/register',user.register)

//用户登录
router.post('/login', user.login)

//将router抛出
module.exports = router