 console.log('before')
 const getData = getUserId(1)
 console.log(getData)

 function getUserId(id){
 setTimeout(()=>{
   console.log('wait for this app  running')
   return {id:id,gitUserid:'saptarshi'}
 },2000)
 return {id:id,gitUserid:'saptarshi'}
}

 console.log('after')