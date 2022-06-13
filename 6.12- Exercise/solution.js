//solution of convert it into Async and Await:


async function getData(){
  const customer = await getCustomer(1);
  console.log('Customer:',customer)
  if(customer.isGold){
    const movies = await getTopMovies()
    console.log('Top movies:',movies)
    const send = await sendEmail(customer.email,movies)
    console.log('Email sent.')
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
    }, 4000);  
  })
  
}

function getTopMovies() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  })
  
}

function sendEmail(email, movies) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
     resolve()
    }, 4000);
  })
  
}