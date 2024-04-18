const express = require('express');
const userRouter = require('./routes/user');
const {connectmongoDB} = require('./connection');
const {logReqRes} = require('./middlewares');

const app = express();
const PORT = 3000;
//connectmongoDB
connectmongoDB('mongodb://127.0.0.1:27017/yourApp')

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(logReqRes('log.txt'));

app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
