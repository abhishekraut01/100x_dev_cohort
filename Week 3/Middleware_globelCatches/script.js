const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send('hello');
})
app.get('/health-checkup',(req,res)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(!(username === 'abhishek' && password === 'pass123')){
        res.status(400).json({
            msg:"something is wrong with your password parameters"
        })
        return
    }
    if(!(kidneyId == 1 || kidneyId == 2)){
        res.status(400).json({
            msg:"something is wrong with your input parameters"
        })
        return
    }
    res.json({
        msg:'everything is okey '
    })
})

app.listen(3000,()=>{
    console.log("server is started at port 3000")
})