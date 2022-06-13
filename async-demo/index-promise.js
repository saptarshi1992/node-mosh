console.log('before')

//Async function::

getUserId(1)
.then(user=>getRepo(user.username))
.then(repos=>getCommit(repos[0]))
.then(commit=>console.log('commit:',commit))
.catch(error=>console.log('error:',error.message))

//using promise:

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