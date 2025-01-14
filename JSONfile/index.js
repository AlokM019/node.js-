const obj = {
   name : "Alok Maurya",
   age : 23,
   Education : "Graduation"
}


//Two methods to change the obj data to json and json to object which is ( JSON.stringify(obj) and JSON.parse(jsondata))

console.log(obj)
const jsonData = JSON.stringify(obj)
console.log(jsonData)

const objdata = JSON.parse(jsonData)
console.log(objdata)


//now using json to file 
const fs = require('fs')
const { json } = require('stream/consumers')
//some object which is declare above

fs.writeFile("./jsonobject.json", jsonData , (err)=>{
   if(err) throw err;
   console.log('file creation successful')
   
})

fs.readFile("./jsonobject.json", "utf-8", (err,data)=>{
   if(err)throw err;
   console.log(data) // the data present in the jsonobject file
   const convertedData = JSON.parse(data)
   console.log(convertedData) // data in the form of object 
})