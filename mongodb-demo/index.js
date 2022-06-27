const mongoose = require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/playground')
    .then(() => console.log('mongodb database is connected'))
    .catch((err) => console.error('database is not connected;', err))
//create schema for collections:

const createSchema = mongoose.Schema({
    name: {
        type:String,
        required:true,
        minlength:3,
        maxlength:20,
        lowercase:true,
        trim:true
    },
    catagory:{
       type:String,
       required:true,
       enum:['web','apps','network'],
       trim:true
    },
    author: String,
    //custom validator//
    tags: {
        type:Array,
        isAsync:true,
        validate:{
            validator: function(v){
                setTimeout(()=>{
                    //console.log("tags validation failed")
                    const result  =  v && v.length >0
                    return result}
                   ,1000)
                
            },
            message:'a course should have one tag'
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type:Number,
        required: function(){
            return this.isPublished
        }
    }
})
//compiles model()://
const Course = new mongoose.model('course', createSchema)

async function createschema() {
    const course = new Course({
        name: 'Codeigniter-4',
        catagory:'web',
        author: 'brad',
        tags:['_'],
        isPublished: true,
        price: 200,
       
    })
    try{
        const result = await course.save()
        console.log(result)   
    }catch(ex){
        console.log("error:",ex.message)
    }
    
}
createschema()


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
//deleteData("62ab656b51fa9f74448c76f0")


