//This page will include all the requests to the backend

import axios from "axios";
const access_token = localStorage.getItem("access_token");
const format = {
  baseUrl: "https://fitness-api-7tqf.onrender.com",
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
};

//Create request with parameters
const createRequest = (method, url, data) => {
  return axios({
    method: method,
    url: `${format.baseUrl}${url}`,
    headers: format.headers,
    data: data,
  });
};

//----------------------Training----------------------//
//Get all trainings
export const getTrainings = async () => {
  try {
    const response = await createRequest("get", "/trainings", "");

    return response.data.trainings;
  } catch (error) {
    console.error(error);
    return false;
  }
};

//Add training to user
export const addTrainingToUser = async (trainingName, new_weight) => {
  try {
    const response = await createRequest("post", "/trainings", {
      trainingName: trainingName,
      new_weight: new_weight,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

//----------------------User----------------------//
//Login
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${format.baseUrl}/auth/login`, {
      email: email,
      password: password,
    });

    return response;
  } catch (error) {
    console.error(error);

    return false;
  }
};
//Register
export const register = async (
  email,
  password,
  firstName,
  lastName,
  height,
  weight
) => {
  try {
    const response = await axios.post(`${format.baseUrl}/auth/register`, {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      height: height,
      weight: weight,
    });
    return response;
  } catch (error) {
    console.error(error);
    return false;
  }
};
//Get user
export const getUser = async () => {
  try {
    const response = await createRequest(
      "get",
      `/auth/${localStorage.getItem("userId")}`,
      ""
    );
    return response.data.user;
  } catch (error) {
    console.log(error);
    console.error(error);
    return false;
  }
};

//----------------------Training Programas----------------------//
export const getTrainingProgramas = async (muscle) => {
  try {
    const response = await createRequest("get", `/muscle/${muscle}`, "");
    return response.data;
  } catch (error) {
    console.error("Error fetching muscleInformation:", error);
    console.log(error);
    console.error(error);
    return [];
  }
};
// Get only name from all Training Programas that in the scema
export const getTrainingProgramasName = async () => {
  try {
    const response = await createRequest("get", `/muscle`, "");
    //return only the name of the training program
    return response.data.map((training) => training.muscle);
  } catch (error) {
    console.error("Error fetching muscleInformation:", error);
    console.log(error);
    console.error(error);

    return false;
  }
};
