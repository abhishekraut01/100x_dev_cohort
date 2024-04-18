const mongoose = require('mongoose');

//schema
const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required : true,
    },
    last_name:{
        type: String,
        required : false,
    },
    email :{
        type : String,
        unique : true,
        required : true,
    },
    job_title:{
        type : String,
        required : false,
    },
    gender:{
        type: String
    },
   
},{timestamps : true})

const User = mongoose.model('user',userSchema);

module.exports = User;