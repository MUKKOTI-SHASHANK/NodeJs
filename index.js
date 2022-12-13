// const http= require('http');

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{
//         "content-type":"text/html"
//     })
//     res.write("<h1>Hello World</h1>")
//     res.write("<p>I am MUKKOTI SHASHANK...</p>")
//     res.end();
// });
// server.listen(5000,()=>console.log("server is on"))
const fs= require('fs');
const http= require('http');
fs.writeFile("index.html","<h1>Hello World</h1> \n <p>This is MUKKOTI SHASHANK...</p>", (err)=>{
    // console.log(err);
})
const server= http.createServer((req,res)=>{
    res.writeHead(200);
    fs.readFile("index.html", (err,data)=>{
        res.write(data);
        res.end();
    })
})
server.listen(5000,()=>console.log("server is at localhost:5000"));