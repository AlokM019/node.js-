//Read > open + read

const { log } = require('console')
const fs = require('fs');
const { buffer } = require('stream/consumers');

// fs.writeFile("./fs/read,txt", "Hello Developers, what's up ? ", (err)=>{
//    if(err){
//       console.log("ERROR : ", err)
//    }
//    console.log("file created succesfully");
   
// });

const buf = new Buffer(1024)
fs.open('./fs/read.txt', 'r+', function(err,fd){
   if(err){
      console.log("ERROR : error while opening the file ",err)
   }
   console.log("file opened successfully")

   fs.read(fd,buf,0,buf.length,0, function(er,bytes){
      if(er){
         console.log('Error : while reading the file ', er)
      }
      console.log("Data : ", bytes);
      console.log('data : ', buf.slice(0, bytes).toString())
      fs.close(fd)
   })
})

