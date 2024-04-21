const mongoose = require('mongoose');

async function connectMongoDB(url){
    
//connect to mongoose
return mongoose.connect(url)

}

module.exports ={
    connectMongoDB,
}