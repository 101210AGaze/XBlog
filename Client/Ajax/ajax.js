const base_url = "http://127.0.0.1:3007"


//尝试使用promise对ajax进行封装

export function ajax(method,url,data){
    //初始化一个XMLHttpRequest对象
    const xhr = new XMLHttpRequest();
    return new Promise((resolve,reject)=>{
        xhr.onreadystatechange = function (){
            if(xhr.readyState===4){
             console.log("请求处理过程完成")
                if(xhr.status===200){
                    resolve(xhr.responseText);
                }
                reject(new Error("ajax请求失败"+xhr.status+" "+xhr.statusText))
            }
        }
       if(method==='GET'){
            xhr.open("GET",base_url+url+"?"+data,true)
            xhr.send(null)
       }
       else if(method==="POST"){
           xhr.open("POST",base_url+url,true)
             // 设置请求头Content-Type,设置为传输json
            xhr.setRequestHeader('Content-Type', 'application/json');
            // 将数据作为请求正文发送
           if(localStorage.getItem('token')) {
               xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem('token'))
           }
            xhr.send(JSON.stringify(data));
       }
     
    })

}

// function  ajax(options){
//     //初始化一个XMLHtmlRequest对象
//     const xhr = new XMLHttpRequest();

//     let option = options||{};
//     option.type = (options.type||"GET").toUpperCase()
//     option.dataType = options.dataType||"json"
//     option.url = base_url+options.url
//     const params = option.data

//     if(option.type==="GET"){
//         xhr.open("GET",base_url+option.url+"?"+params,true)
//         xhr.send(null)
//     }
//     else if(option.type==="POST"){
//         xhr.open("POST",option.url,true)
//         xhr.send(params)

//     }

//     //接受请求
//     xhr.onreadystatechange = function (){
//         if(xhr.readyState===4){
//          console.log("请求处理过程完成")
//             if(200<xhr.status<300){
//                 console.log("处理成功")
//             }
//         }
//     }

// }

export default ajax