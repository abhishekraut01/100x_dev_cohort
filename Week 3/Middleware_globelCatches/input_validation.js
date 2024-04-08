const express = require('express');
const app = express();

app.use(express.json());

app.post('/health-checkup',(req,res)=>{
    //kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("You have " + kidneyLength + " kidneys")
})
//global catch
app.use(function(err,req,res,next){
    res.json({
        msg:"Sorry something went wrong with our server"
    })
})
app.listen(3000)