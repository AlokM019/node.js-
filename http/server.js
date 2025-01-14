const { log } = require('console')
const http = require('http')
const url = require('url')
const fs = require('fs')


// const server1 = http.createServer((req,res)=>{
//    if(req.url == '/'){
//       res.write("<h1> This is my page which is showing the content using http module</h1>")
//    }
//    res.end();
// })


//Routing in Nodejs
const server = http.createServer((req,res)=>{
   
   if(req.url == '/'){
      res.write('<h1>Hello , Node.js !!</h1>')
   }else if(req.url == '/about'){
      res.write('<h1>This is about section</h1>')
   }else if(req.url == '/contact'){
      res.write('<h1>This is contact section </h1>')
   }else if(req.url == '/about/section'){
      res.write('<h1> section page </h1>')
      fs.readFile(`${__dirname}/userApi/userapi.json`, "utf-8", (err,data)=>{
         console.log(data)
      })
   }else{
      res.writeHead(404, {"content-type": "type/html"})
      res.end('<h1> error </h1>')
   }
   res.end()
})

server.listen(5001, ()=>{
   console.log("The HTTP server is running on port 5001")
   
});




