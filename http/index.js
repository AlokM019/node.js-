const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res)=>{
   if(req.url == '/'){
      res.write("<h1>something : from page 1")
   }else if(req.url == '/userapi'){
      res.write("<h1> page 2</h1>")
   }
   else if(req.url == '/userapi/page'){
      
      fs.readFile(`${__dirname}/userApi/userapi.json`, "utf-8", (err,data)=>{
         // console.log(data);
         // res.end(data)
         const obj = JSON.parse(data);
         console.log(obj.Employees[0].firstName)
         res.end(obj.Employees[0].firstName)
         
      })
   }
   else{
      res.writeHead(404)
   }
})

server.listen(5002, ()=>{
   console.log(' port is running')
});