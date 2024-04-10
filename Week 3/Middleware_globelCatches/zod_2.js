const express = require('express');
const zod = require('zod');
const app = express();
const schema = zod.array(zod.number());
app.use(express.json());

app.post('/health-checkup',(req,res)=>{
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if (!response.success) {
        res.status(411).json({
            msg: "something went wrong with your input"
        });
    } else {
        res.json({
            response: response.data
        });
    }
});

app.listen(3000);
