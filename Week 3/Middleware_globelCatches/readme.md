# Express.js Routing Guide

Routing in Express.js is essential for defining the behavior of your server in response to different HTTP requests. This guide will walk you through the key concepts of routing in Express.js.

## 1. Defining Routes

Routes in Express.js are defined using HTTP methods and route paths. Here's an example of defining a route with the GET method:

```javascript
app.get('/', (req, res) => {
    res.send('Hello World!');
});
```

## 2. Route Paths

Route paths define the URL patterns that the server will match. Parameters can be included in route paths using placeholders. Here's an example:

```javascript
app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`User ID: ${userId}`);
});
```
## 3. Handler Functions

Handler functions are executed when a matching route is found. They take request and response objects as parameters and are responsible for generating the response. Example:

```javascript
app.get('/users/:userId', (req, res) => {
    // Handler function logic here
    res.send('User details');
});
```
## 4. Middleware

Middleware functions can be used to perform tasks such as authentication, logging, or input validation before the final handler function is executed. Here's how to use middleware in Express.js:

```javascript
const logRequest = (req, res, next) => {
    console.log('Request received:', req.url);
    next();
};

app.use(logRequest);
```

