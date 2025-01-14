const EventEmitter = require('events');
const { eventNames } = require('process');

const eventEmitter = new EventEmitter();

eventEmitter.once('someEvent', (name)=>{
   console.log(`Hello world ! and hello ${name}!!`)
})


eventEmitter.emit('someEvent', 'Alok')
eventEmitter.emit('someEvent', 'Abhay')

