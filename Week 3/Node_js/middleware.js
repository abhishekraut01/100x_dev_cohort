const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

//connect to mongoose
mongoose.connect('mongodb://127.0.0.1:27017/yourApp').then(()=>{
    console.log("connected to mongoDB")
}).catch((err)=> console.log('Mongo error',err));

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

const User = mongoose.model('user',userSchema)

// Route to display users as HTML
app.get('/users', async (req, res) => {
    const allUsers = await User.find({});
    const html = `
    <ul>
    ${allUsers.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    return res.send(html);
});

// Route to get all users as JSON
app.get('/api/users',async (req, res) => {
    const allUsers = await User.find({});
    return res.json(allUsers);
});

// Route for getting, updating, and deleting a user by ID
app.route('/api/users/:id')
    .get(async (req, res) => {

        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json(user);
    })
    .patch(async (req, res) => {
        const userInput = req.body; // Corrected
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, userInput, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ error: "User not found" });
            }
            return res.json(updatedUser);
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    })
    
    .delete(async (req, res) => {
        // Delete user by ID
        try {
            const deletedUser = await User.findByIdAndDelete(req.params.id);
            if (!deletedUser) {
                return res.status(404).json({ error: "User not found" });
            }
            return res.json({ message: "User deleted successfully" });
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    });

// Route for adding a new user
app.post('/api/users', async (req, res) => {
    const newUser = req.body;
    if(!newUser || !newUser.first_name || !newUser.last_name || !newUser.email || !newUser.job_title || !newUser.gender ){
        return res.status(400).json({ status: "all fileds are required" });
    }

   const result =  await User.create({
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        gender: newUser.gender,
        email: newUser.email,
        job_title: newUser.job_title
    })
    console.log('result',result)
    return res.status(201).json({status: "success"})

});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
