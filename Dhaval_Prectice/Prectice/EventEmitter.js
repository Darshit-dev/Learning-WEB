const events = require("events")

const event = new events.EventEmitter();

event.on('click',(n1,n2)=>console.log(n1+n2))
event.emit('click' ,4,5)