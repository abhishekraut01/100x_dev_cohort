import express from 'express';
import { z } from 'zod';

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// Define a Zod schema for the expected request body
const userSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  age: z.number().int().min(18),
});

// POST route to handle incoming user data
app.post('/users', (req, res) => {
  try {
    // Validate the incoming request body against the schema
    const validatedData = userSchema.parse(req.body);

    // If validation succeeds, process the data
    console.log('Received valid user data:', validatedData);

    // Send a success response
    res.status(201).json({ message: 'User data received and validated successfully' });
  } catch (error) {
    // If validation fails, send an error response
    console.error('Error validating user data:', error.message);
    res.status(400).json({ error: 'Invalid user data' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});