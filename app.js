const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("./src/routes/index");
const connectToDatabase = require("./src/config/database");

// Load environment variables
dotenv.config();

// Initialize express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to database
connectToDatabase();

// Routes
app.use("/api", routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
