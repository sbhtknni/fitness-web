// const { client } = require('./mongoDB/connection');

// // Function to check if a user exists
// const checkUserExists = async (username, password) => {
//   try {
//     const db = client.db('yourDatabaseName');
//     const usersCollection = db.collection('users');
//     const user = await usersCollection.findOne({ username, password });
//     return user !== null;
//   } catch (error) {
//     console.error('Error checking user:', error);
//     throw error;
//   }
// };

// // Function to add a new user
// const addUser = async (username, password) => {
//   try {
//     const db = client.db('yourDatabaseName');
//     const usersCollection = db.collection('users');
//     await usersCollection.insertOne({ username, password });
//     console.log('User added successfully');
//   } catch (error) {
//     console.error('Error adding user:', error);
//     throw error;
//   }
// };

// module.exports = {
//   checkUserExists,
//   addUser,
// };
