import express from "express";
import { dirname } from 'path';
const app = express();

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send('hello world');
})
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

app.get('/product/:id',(req,res)=>{
    const id  = req.params.id;
    res.send("Parameter Value is"+id);
})
// http://localhost:3000/product/1

app.get('/search/',(req,res)=>{
    const id  = req.query.q
    res.send("Qury Value is :"+id);
})
// http://localhost:3000/search?q=ipone

app.get('/getsum',(req,res)=>{
    const num1= req.query.num1;
    const num2 = req.query.num2;
    const add = parseInt(num1)+parseInt(num2);
    res.send(`num1 is ${num1} num2 is ${num2} sum is ${add}`);
})