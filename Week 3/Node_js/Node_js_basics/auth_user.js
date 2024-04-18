const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs').promises;
const bcrypt = require('bcrypt');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Secret key for JWT
const JWT_SECRET = 'your_secret_key';

// Dummy user data (for demonstration purposes)
const users = [
    {
        id: 1,
        username: 'user1',
        password: '$2b$10$3bCYJHXsbrl92EY0rj5XLeKmAXDSXeGvUKAAY6FmHTEKJpj9adGQK', // bcrypt hash of 'password1'
    },
    {
        id: 2,
        username: 'user2',
        password: '$2b$10$3bCYJHXsbrl92EY0rj5XLeKmAXDSXeGvUKAAY6FmHTEKJpj9adGQK', // bcrypt hash of 'password2'
    },
];

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
    const user = users.find(u => u.username === username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }

    const accessToken = jwt.sign({ username: user.username, id: user.id }, JWT_SECRET);
    res.json({ accessToken });
});

// Route for adding a new user
app.post('/api/users', authenticateJWT, async (req, res) => {
    try {
        // Your logic for adding a new user
        res.json({ status: 'success' });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
