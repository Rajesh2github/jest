const getError = (isPassed)=>{
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isPassed){
                resolve("passed")
            }else{
                reject("failed")
            }
        }, 100)
    })
}
module.exports  = getError;