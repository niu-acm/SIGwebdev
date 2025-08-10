// 1. IMPORT EXPRESS
const express = require('express');
const app = express();

// 2. MIDDLEWARE SETUP
// TODO: Add middleware to parse JSON requests
app.use(express._____()); // Hint: Use express.json()

// 3. ROUTES
// TODO: Create a GET route for '/'
app._____('/', (req, res) => {
  res.send(_____); // Hint: Send "Hello World"
});

// TODO: Create a POST route for '/submit'
app._____('/submit', (req, res) => {
  // Hint: Read data from req.body and send it back as JSON
  const userData = req._____;
  res._____(userData);
});

// 4. ERROR HANDLING (BONUS)
// TODO: Add 404 handler for invalid routes
app.use((req, res) => {
  res.status(_____).send('404 - Not Found');
});

// 5. START SERVER
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${_____}`);
});
