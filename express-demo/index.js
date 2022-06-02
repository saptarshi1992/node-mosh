const course = require('./routes/course')
const home = require('./routes/home')

const Joi = require('joi');

const startupdebugger = require('debug')('app:startup');
const dbdebugger = require('debug')('app:db');

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

//using pug:://
app.set('view engine','pug')
app.set('views','./views');

//router::
app.use('/',home)
app.use('/api/courses',course)

//creating middleware:://
app.use(logger);

app.use(function(req,res,next){
    console.log('authenticating...')
    next();
})
//3rd party middleware:://
app.use(helmet());
//app.use(morgan('tiny'))
if(app.get('env') ==='production'){
    app.use(morgan('tiny'))
    startupdebugger('Morgan is enable:')
}
//testing debug://
dbdebugger('db connection is secure:')


//config://
console.log(`app is running in::${config.get('name')}`)
console.log(`app is running in::${config.get('mail.host')}`)
console.log(`app is running in::${config.get('mail.password')}`)




//define env variable//
const port = process.env.PORT || 7000;
app.listen(port,()=>{
    console.log(`your app is listening in ${port}`)
});