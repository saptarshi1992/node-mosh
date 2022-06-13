console.log('before')

//Async function::


//using async-await:
async function displayCommit(){
try{
const user = await getUserId(1)
const repos = await getRepo(user.username)
const commit = await getCommit(repos[0])
console.log('commit:',commit)
}
    catch(err)
    {
      console.log('error:',err.message)
    }
}

displayCommit()

function getUserId(id){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('wait for fetch data from Database')
        resolve({id:id,gitUserid:'saptarshi'})
        reject(new Error('error-message'))
      },2000)
})    

}
console.log('after')

function getRepo(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('fetching Github repo..')
            resolve(['repo1','repo2','repo3'])
            reject(new Error('error-message'))
          },2000)
    })
 
}
function getCommit(repo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('getting commit message')
            resolve({repo:repo,commit:'new-commit'})
            reject(new Error('error-message'))
          },2000)
    })
 
}