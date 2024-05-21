const mongoose = require('mongoose');
const express = require('express');

// Define the connection string with additional options
const uri = "mongodb+srv://sweabhishek:Abhishek007@webcohort.x7why1o.mongodb.net/user_app?retryWrites=true&w=majority";

//middlewares
const app = express();
app.use(express.json());

// Connect to MongoDB using Mongoose with error handling
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,  // Adjust the timeout as necessary
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});

// Create the user model
const User = mongoose.model("User", userSchema);

// Create a new user
app.post('/signup', async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const existUser = await User.findOne({ email: email });
        if (existUser) {
            return res.status(400).json({
                msg: 'User with this mail already exists'
            });
        }

        const user = new User({
            name: username,
            email: email,
            password: password
        });

        await user.save();
        console.log('User saved successfully');
        res.json({
            msg: 'User created successfully'
        });
    } catch (err) {
        console.error('Error saving user:', err);
        res.status(500).json({
            msg: 'Internal server error'
        });
    }
});

// Log connection events for better debugging
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from MongoDB');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
