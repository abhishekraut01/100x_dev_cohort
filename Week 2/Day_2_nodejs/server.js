const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/',(req,res)=>{
   res.send("i am from main page")
})
app.post('/profile', (req, res) => {
   console.log(req.body); // Log the entire request body
   const message = req.query.message;
   console.log(message);
   //all other things
   res.json({
       name: "abhishek"
   });       
});


app.listen(3000);
