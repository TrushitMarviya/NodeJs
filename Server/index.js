const http = require('http');
const port = 1008;

const handleServer = (req,res)=>{
    res.write("<h1>Hello World </h1>");
    res.end();
}
const server = http.createServer(handleServer);

server.listen(port,(err)=>{
    err?console.log(err):console.log("server Started");  
})
