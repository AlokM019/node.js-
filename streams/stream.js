const fs = require('fs')

const http = require('http')

const server = http.createServer((req, res)=>{
   
   //1st way

   // if(req.url == '/'){
   //    res.write("something")
   //    res.end()
   // }else if(req.url == '/about'){
   //    res.write("about something"

   //    )
   // }else{
   //    console.log("nothing")
   // }

   //creating readable stream (2nd way)
   const rdstream = fs.createReadStream('./streams/input.txt') // necessary in every way (kuki file ka naam hai)
   
   // rdstream.on('data', (chunkData)=>{
   //    res.write(chunkData)
   // })
   // rdstream.on('end', ()=>{
   //    res.end()
   // })
   // rdstream.on('error', (err)=>{
   //    console.log(err)
   //    res.end("file not found")
   // })

   //3rd way
   rdstream.pipe(res)



})

server.listen(8000)