const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.use(function(req,res,next){
    console.log("hello form middleware");
    next();
});
app.get('/', (req, res)=>{
   console.log(req.body)
   res.send('hello from simple server :)')
})
app.get('/profile', (req, res)=>{
   console.log(req.headers['authorization'])
   res.send({
      msg:'2+2 = 4'
   })
})

app.get('/profile/:username',function(req,res){
   res.send(`hello form ${req.params.username}`)
})

app.listen(3000);