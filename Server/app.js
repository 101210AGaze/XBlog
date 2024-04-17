const express = require('express')
const cors = require('cors')  //后端配置跨域模块

//导入用户路由模块
const userRouter = require('./route/user')

//导入数据库模块
const xblog_db = require('./DB/xblog_DB')


//创建服务器实例
const app = express()


app.use(cors())

app.use('/api',userRouter)


app.listen(3007,()=>{
    console.log("服务器启动！")
})