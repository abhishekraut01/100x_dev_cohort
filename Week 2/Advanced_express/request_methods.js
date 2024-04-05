const express = require('express');

const users = [{
    name : 'abhishek',
    kidneys:[{
        healthy : false
    }]
}];

const app = express();

app.get('/',(req,res)=>{
    const abhiKidneys = users[0].kidneys;
    const noOfKidneys = abhiKidneys.length;
    let noOfHealthyKidneys = 0;
    for(let i=0; i<abhiKidneys.length;i++){
        if(abhiKidneys[i].healthy){
            noOfHealthyKidneys += 1;
        }  
    }
    const noOfunHealthyKidneys = noOfKidneys - noOfHealthyKidneys;
    res.json({
        noOfKidneys,
        noOfHealthyKidneys,
        noOfunHealthyKidneys
    })
})

app.listen(3000)