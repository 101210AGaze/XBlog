const express = require('express')
const user = require('../route_handler/user')

//创建路由对象
const router = express.Router()


//用户注册
router.post('/register',user.register)

//用户登录
router.post('/login',user.login)

//将router抛出
module.exports = router