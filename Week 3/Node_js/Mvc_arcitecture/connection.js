const mongoose = require('mongoose');

async function connectMongoDB(url){
    
//connect to mongoose
return mongoose.connect(url)
.then(()=>{
    console.log("connected to mongoDB")
}).catch((err)=> console.log('Mongo error',err));

}

module.exports ={
    connectMongoDB,
}