require('dotenv').config(); // Load environment variables first

const express = require("express");
const cors = require("cors");
const connectToDB = require("./config/connectToDB");

const app = express();

// Connect to DB
connectToDB();
const PORT = process.env.PORT || 5000; // Optional fallback if .env is missing

// Middlewares
app.use(express.json());
app.use(cors());
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Something went wrong", success: false });
});

// Routes
app.use('/api/user/', require('./routes/userRoutes'));
app.use('/api/admin/', require('./routes/adminRoutes'));
app.use('/api/doctor', require('./routes/doctorRoutes'));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
