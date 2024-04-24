import ajax from "../../Ajax/ajax.js";
import router from "../../route/route.js";

export function login(url, Email, passWord){
    const data = {
        Email:Email,
        password:passWord,
    }
    return new Promise((resolve,reject)=>{
        ajax("POST",url,data).then(response=>{
            console.log("response",response)
            localStorage.setItem("token", response); // 将 token 存储在 localStorage 中
            resolve(response)
            router.push('/user')
        }) .catch(err => {
            console.error('登录失败:', err); // 打印注册失败的错误信息
            reject(err); // 注册失败，将错误信息传递给 reject
        });
    })
}





//注册接口
export function register(url, fullName, passWord, Email) {
    const data = {
        username: fullName,
        password: passWord,
        Email: Email
    };

    return new Promise((resolve, reject) => {
        ajax("POST", url, data)
            .then(response => {
                console.log("注册成功");
                resolve(response); // 注册成功，将响应数据传递给 resolve
            })
            .catch(err => {
                console.error('注册失败:', err); // 打印注册失败的错误信息
                reject(err); // 注册失败，将错误信息传递给 reject
            });
    });
}



