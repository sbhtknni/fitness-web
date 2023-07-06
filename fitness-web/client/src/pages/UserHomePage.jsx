/**
 * @fileoverview user home page component
 * this component will show the user his data
 * the data showen is:
 * weight statistics
 * bmi statistics
 * popular training
 * Usage percentage of programs graph
 * Weights Per Training graph
 * Total Days Per Program graph
 * table of average weight loss per program
 */
import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout.jsx";
import ErrorPage from "./ErrorPage.jsx";
import { getUser } from "../controller/requests.js";
import UserHomePageForm from "../componenets/UserHomePageComp/UserHomePageForm.jsx";

// UserHomePage function
import {
  calculateAverage,
  calculateMax,
  calculateMin,
  calculatePopularName,
  currentTrainingName,
  calculateWeightLoss,
  calculateWeightLossPerProgram,
  calculateNormalWeight,
  calculateDaysInEachProgram,
} from "../controller/utils/util_home_page.js";

function UserHomePage() {
  const [user, setUser] = useState({});
  const [height, setHeight] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  // data from functions in utils
  const [data, setData] = useState({
    max: 0,
    min: 0,
    average: 0,
    normalWeight: 0,
    standardDeviation: 0,
    median: 0,
    popularName: "",
    currentTraining: "",
    weightLoss: 0,
    weightLossPerProgram: "",
    worstProgram: "",
    averageWeightLossPerProgram: [],
    weights: [],
  });
// data that will not change in the form
  let weights = [];
  let dates = [];
  let trainingNames = [];

  // fetch user data from server and set first values 
  const fetchUser = async () => {
    const response = await getUser();
    if (response === false) {
      setLoading(false);
      return;
    } else {
      const val = response;
      setUser(val);
      setHeight(val.height);
      setAllData(val);
      setError(false);
    }
  };

  // set all data 
  const setAllData = async (user) => {
    //dates will be map with key of training.startdate and value of training.name
    dates = user.selectedTrainings.map(
      (training) => training.startDate + "," + training.name
    );
    weights = user.selectedTrainings.map((training) => training.weight);
    trainingNames = user.selectedTrainings.map((training) => training.name);
    calculateStatistics(user);
  };
  // calculate all statistics from functions in utils
  const calculateStatistics = async (user) => {
    // Update property1
    const updatedData = {
      ...data,
      max: calculateMax(weights),
      min: calculateMin(weights),
      average: calculateAverage(weights),
      normalWeight: calculateNormalWeight(
        user.height,
        weights[weights.length - 1]
      ),
      popularName: calculatePopularName(trainingNames),
      currentTraining: currentTrainingName(trainingNames),
      weightLoss: calculateWeightLoss(user.selectedTrainings),
      weightLossPerProgram: calculateWeightLossPerProgram(
        user.selectedTrainings,
        true
      ),
      averageWeightLossPerProgram: calculateDaysInEachProgram(
        dates,
        user.selectedTrainings
      ),
      weights: weights,
    };
    setData(updatedData);
  };
// run fetch user when component mounts
  useEffect(() => {
    const fetchAllData = async () => {
      await fetchUser();
      setLoading(false);
    };
    fetchAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height]); // Empty dependency array to run the effect only once when the component mounts

  // eror in getting data or log in
  if (error && !loading) {
    return <ErrorPage toRemove={true} />;
  }
  // waiting for data
  if (loading && !error) {
    return <ErrorPage toRemove={false} />;
  }
  // data is ready
  if (!loading && !error) {
    return (
      <MainLayout>
        <UserHomePageForm
          data={data}
          user={user}
          height={height}
          setHeight={setHeight}
          fetchUser={fetchUser}
        />
      </MainLayout>
    );
  }
}
export default UserHomePage;
