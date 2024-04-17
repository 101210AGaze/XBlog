const mysql = require('mysql')

const xblog_db = mysql.createPool({
    host:'127.0.0.1',//数据库的ip地址
    user:'root',     //登录数据库的账号
    password:'xinling101210',//登陆数据库的密码
    database: 'xblog_db' //指定要连接哪一个数据库
})


xblog_db.query('SELECT 1',(err,results)=>{
    if(err) return console.log(err.message)

    console.log(results) //测试成功的连接效果
})

module.exports = xblog_db