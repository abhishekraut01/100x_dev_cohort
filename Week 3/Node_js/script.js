const express = require('express');
const users = require('./MOCK_DATA.json')
const app = express();

app.get('/users', (req, res) => {
    const html =`
    <ul>
    ${users.map(user=> `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    return res.send(html);
})
app.get('/api/users', (req, res) => {
  return res.send(users)
})

app.listen(3000)