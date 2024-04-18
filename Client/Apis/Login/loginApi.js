import ajax from "../../Ajax/ajax.js";


export function login(url, Email, passWord){
    const data = {
        Email:Email,
        passWord:passWord,
    }
    return new Promise((resolve,reject)=>{
        resolve(()=>{
            ajax("POST",url,data).then()
        })
    })
}





//注册接口
export function register(url, fullName, passWord, Email) {
    const data = {
        FullName: fullName,
        passWord: passWord,
        Email: Email
    };

    return new Promise((resolve, reject) => {
        ajax("POST", url, data)
            .then(response => {
                localStorage.setItem("token", response); // 将 token 存储在 localStorage 中
                console.log("注册成功");
                resolve(response); // 注册成功，将响应数据传递给 resolve
            })
            .catch(err => {
                console.error('注册失败:', err); // 打印注册失败的错误信息
                reject(err); // 注册失败，将错误信息传递给 reject
            });
    });
}



