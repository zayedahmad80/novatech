const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env.local') });

const MONGODB_URI = process.env.MONGODB_URI;

async function testConnection() {
  console.log('Testing MongoDB connection...');
  
  if (!MONGODB_URI) {
    console.error('❌ MONGODB_URI not found in .env.local');
    console.log('Make sure .env.local file exists with MONGODB_URI variable');
    return;
  }
  
  console.log('URI found, connecting...');
  
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected successfully!');
    console.log('Database:', mongoose.connection.db.databaseName);
    
    await mongoose.disconnect();
    console.log('✅ Connection closed.');
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
  }
}

testConnection();