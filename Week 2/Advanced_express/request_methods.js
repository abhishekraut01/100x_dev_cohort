const express = require('express');

const users = [{
    name: 'abhishek',
    kidneys: [{
        healthy: false
    }]
}];

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    const abhiKidneys = users[0].kidneys;
    const noOfKidneys = abhiKidneys.length;
    let noOfHealthyKidneys = 0;
    for (let i = 0; i < abhiKidneys.length; i++) {
        if (abhiKidneys[i].healthy) {
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

app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg: "Done !"
    });
});

app.put('/', (req, res) => {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
})

app.delete('/', (req, res) => {
    if (isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys
        res.json({ msg: "unhealthy kidney deleted" })
    }else{
        res.status(411).json({
            msg: "you have no bad kidneys"
        })
    }

})

//if there is no unhealthy kidney there is nothing to do
function isThereAtleastOneUnhealthyKidney() {
    let isThereAtleastOneUnhealthyKidneys = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            isThereAtleastOneUnhealthyKidneys = true;
        }
    }
    return isThereAtleastOneUnhealthyKidneys;
}

app.listen(3000)       