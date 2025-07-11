// Example routes: Defines endpoints and connects them to controllers

const express = require('express');
const router = express.Router();
const {getExample} = require('../controllers/exampleController');
const exampleMiddleware = require('../middlewares/exampleMiddleware');

router.get('/message', (req, res) => {
  res.json({ message: 'Hello from the Express API!' });
});

router.get('/example', exampleMiddleware, getExample);

module.exports = router;