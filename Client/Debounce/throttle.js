function throttle(fn,time,args){
     let door =true
     return function (){
         if(!door){
             return
         }
         door = false
         setTimeout(()=>{
            fn.apply(this,args)
            door = true
         },time)

     }
}

export default throttle