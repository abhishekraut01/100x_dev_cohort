const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require("fs");
const app = express();

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Route to display users as HTML
app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    return res.send(html);
});

// Route to get all users as JSON
app.get('/api/users', (req, res) => {
    return res.json(users);
});

// Route for getting, updating, and deleting a user by ID
app.route('/api/users/:id')
    .get((req, res) => {
        const userId = Number(req.params.id);
        const user = users.find(user => user.id === userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json(user);
    })
    .patch((req, res) => {
        // Placeholder for updating user
        return res.json({ response: "pending" });
    })
    .delete((req, res) => {
        // Placeholder for deleting user
        return res.json({ response: "pending" });
    });

// Route for adding a new user
app.post('/api/users', (req, res) => {
    const newUser = req.body;
    // Adding a unique ID to the new user
    newUser.id = users.length + 1;
    users.push(newUser);
    // Writing the updated user list to file
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        return res.json({ status: "success", id: newUser.id });
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
