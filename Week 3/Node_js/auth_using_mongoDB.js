const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { MongoClient } = require('mongodb');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Secret key for JWT
const JWT_SECRET = 'your_secret_key';
const MONGODB_URI = 'mongodb://localhost:27017';
const DB_NAME = 'your_database_name';

// Function to connect to MongoDB
async function connectToDatabase() {
    const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    return client.db(DB_NAME);
}

// Middleware to authenticate user with JWT
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        req.user = user;
        next();
    });
};

// Route for user login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    const db = await connectToDatabase();
    const users = db.collection('users');

    const user = await users.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }

    const accessToken = jwt.sign({ username: user.username, id: user._id }, JWT_SECRET);
    res.json({ accessToken });
});

// Route for adding a new user
app.post('/api/users', authenticateJWT, async (req, res) => {
    const { username, password } = req.body;
    const db = await connectToDatabase();
    const users = db.collection('users');

    const existingUser = await users.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await users.insertOne({ username, password: hashedPassword });
    res.json({ status: 'success' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
