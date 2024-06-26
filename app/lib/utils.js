import mongoose from "mongoose"

export const connectToDB = async () => {
    let connection = null; // Initialize connection as null
  
    try {
      // Ensure connection is not already established
      if (connection) {
        console.log('Database connection already established.');
        return;
      }
  
      connection = await mongoose.connect(
        "mongodb+srv://admin-sunday:test123@cluster0church.pd4nv5a.mongodb.net/ChurchDB"
      );
  
      console.log('Successfully connected to MongoDB database.');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      // Handle connection errors gracefully (e.g., retry logic, exit)
    }
  };
  