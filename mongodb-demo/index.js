const mongoose = require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/playground')
.then(()=>console.log('mongodb database is connected'))
.catch((err)=>console.error('database is not connected;',err))
//create schema for collections:

const createSchema = mongoose.Schema({
    name: String,
    author:String,
    tags:[ String ],
    date:{type:Date, default:Date.now},
    isPublished: Boolean
})
//compiles model()://
const Course = new mongoose.model('course',createSchema)

async function createschema(){
    const course = new Course({
        name:'react.js',
        author:'saptarshi',
        tags:['reactjs','frontend'],
        isPublished: true
    })
    const result =await course.save()
    console.log(result)
}
//createschema()

//get course data:;//
async function getCourse(){
    const courses = await Course
    .find()
    .limit(10)
    .sort({name:-1})
    .select({name:1,tags:1})
    console.log(courses)
}
getCourse();

