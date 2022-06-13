const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('data return from p1 api')
        resolve({id:1})
        reject(new Error('error in p1'))
    },2000)
    
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('data return from p2 api')
        resolve({id:2})
        reject(new Error('error in p2'))
    },4000)
    
})
Promise.all([p1,p2])
.then(data=>console.log('data:',data))
.catch(err=>console.log('error:',err))
//promise.race

Promise.race([p1,p2])
.then(data=>console.log('data:',data))
.catch(err=>console.log('error:',err))
