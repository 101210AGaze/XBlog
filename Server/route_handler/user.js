 const xblog_db = require('../DB/xblog_DB')
 
 
 
 
 exports.register = (req,res)=>{
    //获取客服端传来的数据

    //根据获取的数据内容生成userId,唯一值

    //根据数据在数据库插入新的数据内容

    //根据userId返还jwt字符
    res.send("注册成功！")
 }

 exports.login = (req,res)=>{

   //jwt验证

   //信息提取

   //查询返回
    res.send("登录成功！")
 }