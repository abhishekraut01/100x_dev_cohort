const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send('I am main page');
})

function userMiddleware(req, res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    
    if(!(username === 'abhishek' && password === 'pass123')){
        res.status(400).json({
            msg:"something is wrong with your password parameters"
        })
        return
    }else{
        next();
    }
}
function kidneyMiddleware(req, res,next){ 
    const kidneyId = req.query.kidneyId;
    if(!(kidneyId == 1 || kidneyId == 2)){
        res.status(400).json({
            msg:"something is wrong with your input parameters"
        })
        return
    }else{
        next();
    }
}
app.get('/health-checkup',userMiddleware,kidneyMiddleware,(req,res)=>{
  

    res.json({
        msg:'everything is okey '
    })
})

app.listen(3000,()=>{
    console.log("server is started at port 3000")
})