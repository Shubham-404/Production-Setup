// Example middleware: Runs before controller logic

module.exports = (req, res, next) => {
  // Example: Log request method and URL
  console.log(`[${req.method}] ${req.url}`);
  next();
};
//hello