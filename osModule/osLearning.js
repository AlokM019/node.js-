//Operating System "OS"

const { log } = require('console');
const os = require('os');
const { constrainedMemory } = require('process');

//Return the architecture of your operating system
console.log(os.arch())
console.log(os.hostname()); //gives your computer's host name => YOGA-6i
console.log(os.platform());
console.log(os.homedir());
console.log(os.type());
console.log(os.tmpdir());
// console.log(os.constants); //it returns an object with the containing values and is njot a function
console.log(os.release())





// os.freemem() => returns the available RAM 
const freeMemory = os.freemem()
console.log(`${freeMemory / 1024 /1024 /1024 }`)

// os.totalmem() => retruns the total RAM
const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 /1024 /  1024 }`);

