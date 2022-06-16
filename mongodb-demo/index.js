const mongoose = require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/playground')
    .then(() => console.log('mongodb database is connected'))
    .catch((err) => console.error('database is not connected;', err))
//create schema for collections:

const createSchema = mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    price: Number,
    date: { type: Date, default: Date.now },
    isPublished: Boolean
})
//compiles model()://
const Course = new mongoose.model('course', createSchema)

async function createschema() {
    const course = new Course({
        name: 'vue-js',
        author: 'xdfgth',
        tags: ['reactjs', 'front-end'],
        price: 200,
        isPublished: true
    })
    const result = await course.save()
    console.log(result)
}
//createschema()


//get course data:;//
async function getCourse() {
    const courses = await Course
        //.find({price:{$gte:200}})
        //.find({ author: /^saptarshi/ })

        //logical operators:
        //.or({author:'saptarshi'},{isPublished:true})
        //.and({author:'saptarshi'},{isPublished:true})
        .limit(10)
        .sort({ name: -1 })
        //.count()
        .select({ name: 1, tags: 1 })
    console.log(courses)
}
//getCourse();

//update-data:
async function updateData(id) {
    //#solution:1

    const course = await Course.findById(id)
    if (!course) {
        console.log('ID is not present in DB:')
        return
    }
    course.set({
        author: 'chakraborty',
        price: 123
    })
    const update = await course.save()
    console.log(update)

    //#solution:2
    /*const course = await Course.findByIdAndUpdate(id,
        { $set: { author: 'saptarshi', price: 235 } }, { now: true })

    console.log(course)*/

    //#solution:3
    /*const result = await Course.update({ _id: id }, {
        $set: { author: 'ultraman', price: 102 }
    })
    console.log(result)*/

}
async function deleteData(id) {
    const course = await Course.deleteOne({ _id: id })
    console.log(course)
}
//updateData("62ab656b51fa9f74448c76f0")
deleteData("62ab656b51fa9f74448c76f0")


