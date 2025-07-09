var http = require('http');

let a = 10
let b = 20
let c = a+b

var msg = '';
if(c==30)
{
    msg='value of c is 30'
}
else
{
    msg= 'value of c is not 30'
}

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(msg)
    console.log(req);
    res.end('<h1 style="color:violet">krish kakadiya</h1>')
}).listen(3000);


console.log('server is running on port: http://localhost:3000/')