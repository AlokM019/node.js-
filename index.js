//1st assignment question
const fs = require('fs')

//2nd assignment question
fs.writeFile("./nodejs_architecture.txt","Node.js is an open-source, cross-platform runtime environment that allows developers to execute JavaScript code outside a web browser. Built on the V8 JavaScript engine (developed by Google for Chrome), Node.js is designed to build scalable network applications and handle multiple concurrent connections with high efficiency.", (err)=>{
   if(err){
      console.log(err)
   }
});

//3
fs.readFile("./nodejs_architecture.txt", 'utf-8', (err,data)=>{
   if(err){
      console.log(err)
   }else{
      console.log(data)
   }
})

//4
fs.appendFile("./nodejs_architecture.txt", " Advantages of Node.js 1.High Performance: Its non-blocking I/O and fast execution speed make it a top choice for performance-critical applications. 2.Scalability: The event-driven model supports building scalable network applications. 3.Rich Ecosystem: The NPM library offers tools and modules for virtually every use case. 4.Unified Language: Developers can use JavaScript for both client and server-side development.", (err)=>{
   if(err){
      console.log(err)
   }
})

//5
fs.unlink("./nodejs_architecture.txt", (err)=>{
   if(err){
      console.log(err)
   }else{
      console.log("File Deleted Successfully")
   }
})




//6
//operating system module
const os = require('os')

console.log("Operating System Name: ",os.type())
console.log("OS Release : ",os.release())

//7
//http module
const http = require('http')

const server = http.createServer((req,res)=>{
   if(req.url == '/'){
      res.write("<h1>I Am Happy To Learn Full Stack Web Development From PW Skills! </h1>")
   }
   res.end()
})

server.listen(5000, ()=>{
   console.log("The http sever is running on port number 5000")
})


//8
const EventEmitter = require('events')
const eventEmitter = new EventEmitter();

eventEmitter.on("Subscribe", (channelName)=>{
   console.log(`Thanks for Subscribing to ${channelName}.`)
})

eventEmitter.emit("Subscribe", "College Wallah")


//9
const logMessage = (msg) => console.log(msg);

eventEmitter.on("newEvent", logMessage);

//call event listener before removing the event
eventEmitter.emit("newEvent", "lets do something") //it will print the message

//removing the event
eventEmitter.removeListener("newEvent", logMessage) //this will remove the named event

//call the event listener after removing the event
eventEmitter.emit("newEvent", logMessage) // nothing will be printed on the console



//10
//getting the  dafault maximum event listener
console.log(`The default maximum event listener is ${eventEmitter.getMaxListeners()}`)

//restricting the event listener to specific value
eventEmitter.setMaxListeners(5)

//getting the updated the value  of event listener
console.log(`The updated maximum event listener is ${eventEmitter.getMaxListeners()}`)