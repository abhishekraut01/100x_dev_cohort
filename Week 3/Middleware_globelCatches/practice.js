const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send('I am main page');
})
app.get('/profile/:username',(req,res)=>{
    const userId = req.params.username;
    res.send(`i am from ${userId}`);
})


app.listen(3000,()=>{
    console.log("server is started at port 3000")
})