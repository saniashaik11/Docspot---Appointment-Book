const mongoose = require("mongoose");

// Function to connect to MongoDB
const connectToDB = async () => {
  try {
    const uri = process.env.MONGO_URI;

    // Debugging: print URI (only in dev, remove if sensitive)
    console.log("Connecting to MongoDB with URI:", uri);

    if (!uri) {
      throw new Error("MONGO_URI is not defined in the environment variables");
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB successfully");
  } catch (err) {
    // If connection fails, show detailed error
    throw new Error(`❌ Could not connect to MongoDB: ${err}`);
  }
};

module.exports = connectToDB;
