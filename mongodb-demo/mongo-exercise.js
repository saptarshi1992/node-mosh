const mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0:27017/mongo-exercises')
    .then(() => console.log('Database is connected'))
    .catch((err) => console.error('Database is not connected;', err))

const createSchema = mongoose.Schema({
    tags: [String],
    date: Date,
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
})

const Course = new mongoose.model('Course', createSchema)

/*const course = new Course({

})*/
async function getdata() {
    const courses = await Course
        .find({isPublished:true})
        .or([{price:{$gte:15}},{name: /.*by.*/i}])
        /*.find({isPublished:true})
        //.find({ isPublished: true, tags:{$in:['fronetend','backend']} }) //for exercise:2
          .or([{tags:'frontend'},{tags:'backend'}])*/
        .sort({price: -1})
        .select({ name: 1, author: 1 ,price: 1})
    console.log(courses)
}
getdata()