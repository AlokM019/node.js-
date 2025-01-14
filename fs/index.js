// const fs = require('fs')

// fs.mkdirSync("asyncFS")
// fs.writeFile("asyncFS/data.txt", "something to enter",
//    (err) => {
//       console.log("file is created")
//       console.log(err)
//    }
// )


// data addition usind asynchronous method
// fs.appendFile("asyncFS/data.txt", ", data to be added", (err)=> {
//    console.log("task completed")
// })


//reading data using asynchronous method

// fs.readFile("asyncFS/data.txt", 'utf8', (err, data) => {
//    console.log(data)
// })


//CRUD => Create, Read, Update, Delete using asynchronous method in node.js

//first wwe have to get on to the filesystem to work on

const fs = require('fs')

//Create a file 
fs.writeFile("fs/async.txt", "data to add ", (err) => {
   console.log("file is created")

})


//update
fs.appendFile("fs/async.txt", ", new data to add into the async file", (err) => {
   console.log("task completed");
})

//read 
fs.readFile("fs/async.txt", 'utf-8', (err, data) => {
   console.log(data)
   //the data came into binary form which is buffer data. So, to handle the buffer data we have used UTF-8 encoding 
})



//delete
fs.unlink("fs/async.txt", (err) => {
   if(err){
      console.log(err)
   }
   else{
      console.log("file successfully deleted")
   }
})


