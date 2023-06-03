//This page will include all the requests to the backend

import axios from "axios";
const access_token = localStorage.getItem("access_token");

const format = {
    baseUrl: "http://localhost:3002",
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
        return [];
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

