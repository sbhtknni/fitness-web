const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://romharel:JOu6QaJuEstS0Bka@fitness-web.u0isjzc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const connectToMongoDB = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Failed to connect to MongoDB Atlas", error);
  }
};
f
const closeMongoDBConnection = async () => {
  try {
    await client.close();
    console.log("MongoDB Atlas connection closed");
  } catch (error) {
    console.error("Failed to close MongoDB Atlas connection", error);
  }
};

module.exports = {
  connectToMongoDB,
  closeMongoDBConnection,
  client,
};
