 const xblog_db = require('../DB/xblog_DB')
 const jwt = require('jsonwebtoken')
 
//设置服务器密钥

const jwtScretKey = "xinlin101210_want_offer"




//token检测中间件，检测是否登录

exports.isLogin = async function isLogin(req,res,next){
       //获取请求的令牌
       const tokenHeaderKey = 'Authorization';
       const token = req.header(tokenHeaderKey)
       
       if(!token){
         res.status(401).json({error: "用户未登录"})
       }

       const verified = jwt.verify(token,jwtScretKey)

       if(verified){
         next()
       }else{
         return res.status(401).json({error:"无效的token"})
       }
}         

 
 
exports.register = async (req, res) => {
   try {
       const { username, password, Email, registerDate } = req.body;
       console.log(req.body)
       const SuSql = "INSERT INTO user (UserName, Email, PassWord, RegisterData) VALUES (?, ?, ?, NOW())";
       const user = await xblog_db.query(SuSql, [username, Email, password],(err,results)=>{
         if(err){
            return console.log(err.message)
         }
       });
       if (!user) {
           return res.status(401).json({ error: "注册错误" });
       }

       console.log("注册成功")
   } catch (error) {
       console.log(error);
       res.status(500).json({ error: "注册失败" });
   }

}


 exports.login = async (req,res)=>{

   //jwt验证
   try{
      const {Email,password} = req.body  //存储请求中的信息、
      
      const user = xblog_db.query("SELECT Email=? AND PassWord = ? FROM user",[Email,password],(err,result)=>{
         if(err){
            return console.log(err.message)
         }
         return result
      })
      
      //登录的时候发放令牌
      const getIDSql = "SELECT UserID FROM user WHERE Email=? AND PassWord=?";
      const payload = await xblog_db.query(getIDSql, [Email, password],(err,results)=>{
        if(err){
           console.log(err.message)
        }
        return results
      });

      if (!payload) {
          return res.status(401).json({ error: "获取ID时出错" });
      }

      const token = jwt.sign({ userID: payload.UserID }, jwtScretKey, { expiresIn: '1h' });
      res.json({ token });

      //这里放数据库查找方法
      if(!user){
         return res.status(401).json({error:"用户名或者密码错误"})
      }
   } catch(error){
      res.status(500).json({error:"登录失败"});
   }

 }