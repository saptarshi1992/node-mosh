const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1)
        reject(new Error('error-message'))
    },2000)
})

p
.catch(err=>console.log('error:',err.message))
.then(result=>console.log('result:',result))