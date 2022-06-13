//solution of convert it into Async and Await:


async function getData(){
  try{
  const customer = await getCustomer(1);
  console.log('Customer:',customer)
  if(customer.isGold){
    const movies = await getTopMovies()
    console.log('Top movies:',movies)
    const send = await sendEmail(customer.email,movies)
    console.log('Email sent.')
  }
}
catch(err){
  console.log('error:',err.message)
}
}

getData()

function getCustomer(id) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'saptarshi 123', 
        isGold: true, 
        email: 'email' 
      });
      reject(new Error('error in fetching data of customer'))
    }, 4000);  
  })
  
}

function getTopMovies() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
      reject(new Error('error in fetching data of get-top-movies'))
    }, 4000);
  })
  
}

function sendEmail(email, movies) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
     resolve()
     reject(new Error('error in sending mail'))
    }, 4000);
  })
  
}