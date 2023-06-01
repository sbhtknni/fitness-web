// //This page will include all the requests to the backend

// import axios from "axios";

// //Traunings
// export const getTrainings = async (access_token) => {
//     try {
//         const response = await axios.get("http://localhost:3002/trainings", {
//         headers: { Authorization: `Bearer ${access_token}` },
//         });
//         return response.data.trainings;
//     } catch (error) {
//         console.error(error);
//         return [];
//     } }

// export const addTraining = async (access_token, userID, trainingName, new_weight) => {
//     try {
//         await axios.post("http://localhost:3002/trainings", {
//             userID: userID,
//             trainingName: trainingName,
//             new_weight: new_weight,
//         });
//         return true;
//     } catch (error) {
//         console.error("Error adding training program:", error);
//         return false;
//     }
// }
