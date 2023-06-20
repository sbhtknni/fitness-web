import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Footer from "../componenets/General/Footer.jsx";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
} from "mdb-react-ui-kit";
import ProfilePicture from "../componenets/UserPageComp/ProfilePicture.jsx";
import { getUser } from "../controller/requests.js";
import {
  calculateAverage,
  calculateMax,
  calculateMin,
  calculateVariance,
  calculateStandardDeviation,
  calculateMedian,
  calculatePopularName,
  currentTrainingName,
  calculateWeightLoss,
  calculateWeightLossPerProgram,
} from "../controller/utils/util_home_page.js";
import GraphComponent from "../componenets/General/GraphComponent.jsx";
import ChartTrainigGraph from "../componenets/General/ChartTrainingGraph.jsx";
import DetailsCard from "../componenets/UserPageComp/DetailsCard.jsx";
import BigCard from "../componenets/UserPageComp/BigCard.jsx";
import getURL from "../assets/assetsUrls.js";

function UserHomePage() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [data, setData] = useState({
    max: 0,
    min: 0,
    average: 0,
    variance: 0,
    standardDeviation: 0,
    median: 0,
    popularName: "",
    currentTraining: "",
    weightLoss: 0,
    weightLossPerProgram: "",
    worstProgram: "",
  });

  let weights = [];
  let dates = [];
  let trainingNames = [];

  const fetchUser = async () => {
    const response = await getUser();
    if (response === false) {
      setLoading(false);
      return;
    } else {
      console.log("Repsonse is ", response);
      const val = response;
      setUser(val);
      setAllData(val);
      setError(false);
    }

    // Set loading to false once data is fetched
  };

  const setAllData = async (user) => {
    console.log("User selectes ", user);
    dates = user.selectedTrainings.map((training) => training.startDate);
    weights = user.selectedTrainings.map((training) => training.weight);
    trainingNames = user.selectedTrainings.map((training) => training.name);
    calculateStatistics(user);
  };

  const calculateStatistics = (user) => {
    // Update property1
    const updatedData = {
      ...data,
      max: calculateMax(weights),
      min: calculateMin(weights),
      average: calculateAverage(weights),
      variance: calculateVariance(weights),
      standardDeviation: calculateStandardDeviation(weights),
      median: calculateMedian(weights),
      popularName: calculatePopularName(trainingNames),
      currentTraining: currentTrainingName(trainingNames),
      weightLoss: calculateWeightLoss(user.selectedTrainings),
      weightLossPerProgram: calculateWeightLossPerProgram(
        user.selectedTrainings
      ),
    };
    console.log("Weights are ", calculateWeightLoss(user.selectedTrainings));
    setLoading(false);
    setData(updatedData);
  };

  useEffect(() => {
    async function fetchAllData() {
      await fetchUser();
    }
    fetchAllData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  if (error && !loading) {
    return <ErrorPage toRemove={true} />;
  }
  if (loading && !error) {
    return <ErrorPage toRemove={false} />
  }

    if (!loading && !error) {
      return (
        <MainLayout>
          <section style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5">
              <MDBRow>
                {/* Profile Picture Cube */}
                <ProfilePicture user={user} />
                <MDBCol sm="8">
                  {/* User Details Card  */}

                  <DetailsCard user={user} training={data.currentTraining} />
                  <MDBRow className="row-cols-1 row-cols-md-3 g-4">
                    {/* Include Max and Min Weight */}
                  </MDBRow>
                </MDBCol>
              </MDBRow>
             
             
              <MDBRow className="row-cols-1 row-cols-md-3 g-4">


                <BigCard
                  title="Weight"
                  text={`#Max Weight $${data.max} kg$ \n #Min Weight $${data.min} kg$ # ${data.weightLoss} \n `}
                  img_src={getURL("weight")}
                />
                <BigCard
                  title="Statistics"
                  text={`#Varience $${data.variance}$ \n #Standard Deviation $${data.standardDeviation}$ \n #Median $${data.median}$ \n`}
                  img_src={getURL("statistics")}
                />
                <BigCard
                  title=""
                  text={`#Popular Training  $${data.popularName}$  #Current Training $${data.currentTraining}$  #Weight Loss Per Program ${data.weightLossPerProgram} \n `}
                  img_src={getURL("workout")}
                />
              </MDBRow>

              <MDBRow className="py-4">
                <MDBCol sm="7" className="h-100">
                  <MDBCard className="h-100">
                    <MDBCardHeader className="fw-bolder text-center">
                      Program Distribution
                    </MDBCardHeader>
                    <MDBCardBody>
                      <ChartTrainigGraph
                        selectedTrainings={user.selectedTrainings}
                      />
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                <BigCard
                  title="General information"
                  text={`#Varience $${data.variance}$ \n #Standard Deviation $${data.standardDeviation}$`}
                  img_src={getURL("general-info")}
                />
              </MDBRow>

              <MDBRow className="py-2">
                <MDBCard  className="h-100">
                  <MDBCardHeader className="fw-bolder text-center">
                    Weight Linear Graph
                  </MDBCardHeader>
                  <MDBCardBody>
                    <GraphComponent
                      selectedTrainings={user.selectedTrainings}
                    />
                  </MDBCardBody>
                </MDBCard>
              </MDBRow>
              <hr />
              <Footer />
            </MDBContainer>
          </section>
        </MainLayout>
      );
    }
  
}
export default UserHomePage;
