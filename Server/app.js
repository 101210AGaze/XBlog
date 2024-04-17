const express = require('express')
const cors = require('cors')  //后端配置跨域模块
const jwt = require('jsonwebtoken')//jwt模块

//导入用户路由模块
const userRouter = require('./route/user')


//创建服务器实例
const app = express()


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',userRouter)


app.listen(3007,()=>{
    console.log("服务器启动！")
})