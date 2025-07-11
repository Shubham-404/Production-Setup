// Load environment variables
require('dotenv').config();

// Import dependencies
const express = require('express');
const path = require('path');

// Initialize app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// === Routes ===

// Home route - Serve HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Example HTML route
app.get('/api/example', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'example.html'));
});

// API routes
const exampleRoutes = require('./routes/exampleRoutes');
app.use('/api', exampleRoutes);

// 404 routes
// const exampleRoutes = require('./routes/exampleRoutes');
app.get(/.*/, (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'notFound.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🔗 View at http://localhost:${PORT}`);
});
