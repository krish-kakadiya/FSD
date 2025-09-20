import { createServer } from 'http';

createServer((req,res)=>{
    if(req.url == '/'){
        res.end(`<h1>HOME page</h1>`)
    }
    else if(req.url == '/about')
    {
        res.end('<h1>about page<h1>')
    }
    else{
        res.end('page not found')
    }
}).listen(3000);
console.log('http://localhost:3000/')