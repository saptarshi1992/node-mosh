const Joi = require('joi');
const config = require('config');
const helmet = require('helmet')
const morgan = require('morgan')
const express = require('express');
const { exist } = require('joi');
const app = express();
const logger = require('./logger');
const { urlencoded } = require('express');
//middleware:://

//built-in middleware 

app.use(express.json())
app.use(express.urlencoded({ extended:true }));
app.use(express.static('public'))

//creating middleware:://
app.use(logger);

app.use(function(req,res,next){
    console.log('authenticating...')
    next();
})
//3rd party middleware:://
app.use(helmet());
//app.use(morgan('tiny'))
/*if(app.get('env') ==='production'){
    app.use(morgan('tiny'))
}*/
//config://
console.log(`app is running in::${config.get('name')}`)
console.log(`app is running in::${config.get('mail.host')}`)
console.log(`app is running in::${config.get('mail.password')}`)


const courses = [{id:1,name:'saptarshi'},
{id:2,name:'saptarshi'},
{id:3,name:'saptarshi'}]

//GET::
app.get('/',(req,res)=>{
 res.send('hello world')
})
app.get('/api/courses',(req,res)=>{
    //res.send([1,2,3]);
    res.send(courses);
})
app.get('/api/courses/:id',(req,res)=>{
const course = courses.find(c => c.id === parseInt(req.params.id))
if(!course){
    res.status(404).send('course not found')
}else{
    res.send(course)
}
})
app.get('/api/courses/:date/:month',(req,res)=>{
    //res.send(req.params)
    res.send(req.query)
})

//POST::
app.post('/api/courses/',(req,res)=>{
   const schema = Joi.object({
       name:Joi.string().min(3)
       .max(30)
       .required()
   })
 
   const validation = schema.validate(req.body);
   if(validation.error)
   {
       res.status(400).send(validation.error.details[0].message)
       return;
   }
    const course = [{
        id:courses.length+1,
        name:req.body.name
    }]
    courses.push(course)
    res.send(course);
})

//PUT::
app.put('/api/courses/:id',(req,res)=>{

//check that ID is exist or not :://
const course = courses.find(c => c.id === parseInt(req.params.id))
if(!course){
    res.status(404).send('course not found')
}
//validate the user req:://
const { error } = validateCourse(req.body)
if(error) {
       res.status(400).send(error.details[0].message)
       return;
   }
//update the course:://
course.name = req.body.name
res.send(course);


})
function validateCourse(check){
    const schema = Joi.object({
        name:Joi.string().min(3)
        .max(30)
        .required()
    })
    return schema.validate(check);
}

//DELETE://
app.delete('/api/courses/:id',(req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course){
        res.status(404).send('course not found')
    }
    const index = courses.indexOf(course)
    courses.splice(index,2);
    res.send(courses)
})

//define env variable//
const port = process.env.PORT || 7000;
app.listen(port,()=>{
    console.log(`your app is listening in ${port}`)
});