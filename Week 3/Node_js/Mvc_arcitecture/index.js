const express = require('express');
const { connectMongoDB } = require('./connection');

const userRouter = require('./routes/user');
const { logReqRes } = require('./middlewares');

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectMongoDB('mongodb://127.0.0.1:27017/yourApp')
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => console.log('MongoDB error:', err));

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(logReqRes('log.txt')); // Using the middleware

app.use('/api/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
