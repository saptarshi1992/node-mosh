const EventEmitter = require('events');
//var emitter = new EventEmitter();
var url = 'http://mylogger.in/log';

class Logger extends EventEmitter{
    log(message){
        console.log(message);
        this.emit('messageLoaded',{  id:1,url:'http://'} );
    }
}


module.exports = Logger;

