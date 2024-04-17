import ajax from "../../Ajax/ajax.js";


//登录接口
export function login(url, Email, passWord){
    const options = {
        type: "POST",
        dataType:"json",
        url:url,
        data:{
            passWord:passWord,
            Email:Email,
        }
    }
    ajax(options)
}





//注册接口
export function register(url, fullName, passWord, Email){
    const options = {
        type: "POST",
        dataType:"json",
        url:url,
        data:{
            fullName:fullName,
            passWord:passWord,
            Email:Email,
        }
    }
    ajax(options)
}


