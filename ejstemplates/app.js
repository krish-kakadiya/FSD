const express = require('express');
const app = express();
const port = 3000

app.use(express.urlencoded());
app.set('views',__dirname+'/views');
app.set('view engine','ejs');

app.get('/homepage',(req,res)=>{
    res.render('home',{"myname":"krish kakadiya"});
})


app.get('/marksheet',(req,res)=>{
    res.render('marksheet');
})

app.post('/marksheetprocess',(req,res)=>{
    const a = req.body.txt1;
    const b = req.body.txt2;
    const c = parseInt(a) + parseInt(b); 

    // res.render('ans',{'a':a,'b':b,'c':c})
    res.send(`${c}`)

})


app.listen(port,()=>{
    console.log('http://localhost:3000/homepage');
})
