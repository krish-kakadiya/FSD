import express from "express";
const app = express();

app.use(express.static('public'))

// app.get('/',(req,res)=>{
//     res.send('hello world');
// })
app.get('/home',(req,res)=>{
    res.send('hello home');
})
app.get('/about',(req,res)=>{
    res.send('hello about');
})
app.get('/contact',(req,res)=>{
    res.send('hello contact');
})
app.listen(3000,()=>{
    console.log('http://localhost:3000/');
})