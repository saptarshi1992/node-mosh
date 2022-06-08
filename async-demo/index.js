 console.log('before')
 getUserId(1,(user)=>{
   console.log('user',user)
  getRepo(user.gitUserid,(repos)=>{
    console.log('repos',repos)
  })
 })
 //console.log(getData)
 //callbacks
 //async
 //promises

 function getUserId(id,callback){
 setTimeout(()=>{
   console.log('wait for fetch data from Database')
   callback({id:id,gitUserid:'saptarshi'})
 },2000)
 //return {id:id,gitUserid:'saptarshi'}
}
console.log('after')

function getRepo(username,callback){
  setTimeout(()=>{
    console.log('fetching Github repo..')
    callback(['repo1','repo2','repo3'])
  },2000)
}