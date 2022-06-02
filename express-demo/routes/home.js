const express = require('express')
const router = express.Router();


router.get('/',(req,res)=>{
    //res.send('hello world')
    res.render('index',{
        //name:'express-demo-app',
        message:'this is a test app'
    })
   })
module.exports = router