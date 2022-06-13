 console.log('before')

 //Async function::

 getUserId(1,userData)

 function userData(user){
  getRepo(user.gitUserid,getRepos)
 }
 function getRepos(repos){
  getCommit(repos[0],displayCommit)
 }
 function displayCommit(commit){
   console.log(commit)
 }
 
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
function getCommit(repo,callback){
  setTimeout(()=>{
    console.log('getting commit message')
    callback({repo:repo,commit:'new-commit'})
  },2000)
}