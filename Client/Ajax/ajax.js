const base_url = "http://127.0.0.1:3007"


function  ajax(options){
    //初始化一个XMLHtmlRequest对象
    const xhr = new XMLHttpRequest();

    let option = options||{};
    option.type = (options.type||"GET").toUpperCase()
    option.dataType = options.dataType||"json"
    option.url = base_url+options.url
    const params = option.data

    if(option.type==="GET"){
        xhr.open("GET",base_url+option.url+"?"+params,true)
        xhr.send(null)
    }
    else if(option.type==="POST"){
        xhr.open("POST",option.url,true)
        xhr.send(params)

    }

    //接受请求
    xhr.onreadystatechange = function (){
        if(xhr.readyState===4){
         console.log("请求处理过程完成")
            if(200<xhr.status<300){
                console.log("处理成功")
            }
        }
    }

}

export default ajax