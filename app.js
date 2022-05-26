//module wrapper function//
//const logger = require('./logger.js');
//logger.log('httpreq');

//working with path module//
const path  = require('path');
var pathData = path.parse(__filename);
//console.log(pathData.dir);

//working with OS module//
const memory = require('os');
var totalMemory = memory.totalmem();
var freeMemory = memory.freemem();
//console.log(`totalmemory:${totalMemory}`);
//console.log(`freememory:${freeMemory}`);
//working with file module//
const file = require('fs');
// sync method for fs module//
//var file_dir = file.readdirSync('./');
file.readdir('./',function(err,file){
    if(err){
        console.log(err)
    }
    else{
        console.log(file)
    }
})
//working with event module//

//create a class EventEmitter//
const EventEmitter = require('events');
const Logger = require('./logger.js');
//create a obj of that class//
//var emitter =  new EventEmitter();
const logger = new Logger();
//event listener//

logger.on('messageLoaded',(arg)=> {
    console.log('message pass',arg)
})
logger.log('httpreq');
//event pass//

//http module//
const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/')
    {
        res.write('Hello World');
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
/*server.on('connection',(socket)=>{
    console.log('new connection...')
})*/
//server.listen(7000);
//console.log('listeniung on port 7000...')

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);