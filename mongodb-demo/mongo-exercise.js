const mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0:27017/mongo-exercises')
    .then(() => console.log('Database is connected'))
    .catch((err) => console.error('Database is not connected;', err))

const createSchema = mongoose.Schema({
    _id: String,
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
//getdata()
//update data into mongoDB://
async function updateData(id){
    /*const getData = await Course.findById(id)
    if(!getData){
        console.log("id is not present")
        return
    }
    getData.set({
        author:'saptarshi',
        isPublished:true
    })
    const saveData = await getData.save()
    console.log(saveData)*/
    /*const result = await Course.update({_id:id},
        {$set:{
            author:'saptarshi',
            isPublished:false
        }})*/
        const course = await Course.findByIdAndUpdate(id,
            {$set:{
                author:'saptarshi-coder',
                isPublished:false
            }},{new:true})

    console.log(course)
}
//delete from database://
async function deleteDoc(id){
   const result =  await Course.deleteOne({_id:id})
   //const course = await Course.findByIdAndRemove(id)
   console.log(result)
}
//updateData('5a68ff090c553064a218a547')
deleteDoc('5a68ff090c553064a218a547')


