//防抖函数，类似于回城的概念，设置在几秒后触发事件，中间被打断则重新计时

function debounce(fn,time){
    let timeout;
    return function (){
        let oldTime = Date.now()
        //清除上一个定时器
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            let newTime = Date.now()
            if(newTime-oldTime>time){
                fn(oldTime,newTime)
            }
        },time)
    }
}

export default debounce