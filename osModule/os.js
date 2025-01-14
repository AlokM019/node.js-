
const { log } = require('console')
const fs = require('fs')

// fs.writeFile("osModule/osLearning.js","data", (err) => {
//    console.log("file is created")
//    if(err){console.log(err)};
   
// })

// //delete the unwanted file from the folder
// fs.unlink("osModule/osLearning", (err) => {
//    if(err){
//       console.log(err);
      
//    }
// })

// create  a path folder 
// fs.mkdir("pathModule", (err) => {
//    if(err){
//       console.log(err)
//    }
// })

fs.writeFile("pathModule/path.js","//data" ,(err) => {
   if(err){
      console.log(err);
      
   }
})