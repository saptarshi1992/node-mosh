const express = require('express')
const route = express.Router();

const courses = [{id:1,name:'saptarshi'},
{id:2,name:'saptarshi'},
{id:3,name:'saptarshi'}]

//API::
//GET::
  route.get('/',(req,res)=>{
       //res.send([1,2,3]);
       res.send(courses);
   })
   route.get('/:id',(req,res)=>{
   const course = courses.find(c => c.id === parseInt(req.params.id))
   if(!course){
       res.status(404).send('course not found')
   }else{
       res.send(course)
   }
   })
   route.get('/api/courses/:date/:month',(req,res)=>{
       //res.send(req.params)
       res.send(req.query)
   })
   
   //POST::
   route.post('/',(req,res)=>{
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
   route.put('/:id',(req,res)=>{
   
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
   route.delete('/:id',(req,res) => {
       const course = courses.find(c => c.id === parseInt(req.params.id))
       if(!course){
           res.status(404).send('course not found')
       }
       const index = courses.indexOf(course)
       courses.splice(index,2);
       res.send(courses)
   })

   module.exports = route
   