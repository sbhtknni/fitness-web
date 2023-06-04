import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";
import ErrorPage from "./ErrorPage.jsx";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
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
} from "../controller/utils/util_home_page.js";
import RowOfDetails from "../componenets/UserPageComp/RowOfDetails.jsx";
import GraphComponent from "../componenets/graphComponent.jsx";
import ChartTrainigGraph from "../componenets/ChartTrainingGraph.jsx";

function UserHomePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [dates, setDates] = useState([]);
  const [weights, setWeights] = useState([]);
  const [trainingNames, setTrainingNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUser();
      if (response ===[]) {
        setError(true);
        return;
      }
      console.log("User response ", response);
    
      setUser(response);
      setLoading(false); // Set loading to false once data is fetched

      setAllData();
    };

    const setAllData = async () => {
      if (!loading) {
      console.log("User selectes ", user);
      setDates(user.selectedTrainings.map((training) => training.startDate));
      setWeights(user.selectedTrainings.map((training) => training.weight));
      setTrainingNames(user.selectedTrainings.map((training) => training.name));
      calculateStatistics()
      }
    };

    const calculateStatistics = () => 
    {
      console.log("Weights ", weights);
      const average = calculateAverage(weights);
      const max = calculateMax(weights);
      const min = calculateMin(weights);
      const variance = calculateVariance(weights);
      const standardDeviation = calculateStandardDeviation(weights);
      const median = calculateMedian(weights);
      const popularName = calculatePopularName(trainingNames);
      const currentTraining = currentTrainingName(trainingNames);
      const weightLoss = calculateWeightLoss(weights);

    };

    fetchUser();
  
  }, []); // Empty dependency array to run the effect only once when the component mounts

  if (error) {
    return <ErrorPage toRemove={true} />;
  }
  if (loading) {
    return <ErrorPage toRemove={false} />;
  }
  else {

  return (
    <MainLayout>
      <section style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5">
          <MDBRow>
            {/* Profile Picture Cube */}
            <ProfilePicture user={user} />

            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <RowOfDetails
                    type="Full Name"
                    value={user.firstName + " " + user.lastName}></RowOfDetails>
                  <RowOfDetails
                    type=" Email "
                    value={user.email}></RowOfDetails>
                  <RowOfDetails
                    type=" Height "
                    value={user.height}></RowOfDetails>
                  <RowOfDetails
                    type=" Weight "
                    value={user.weight}></RowOfDetails>
                </MDBCardBody>
              </MDBCard>
             
              <MDBRow>
                
                <MDBCol md="8">
                  <MDBCard className="mb-4 mb-md-3">
                    <MDBCardBody>
                      <MDBCardBody>
                        <ChartTrainigGraph
                          selectedTrainings={user.selectedTrainings}
                        />
                                          <GraphComponent selectedTrainings={user.selectedTrainings} />

                      </MDBCardBody>
                    </MDBCardBody>
                  </MDBCard>
                  <MDBCard className="mb-4">
                <MDBCardBody>
                </MDBCardBody>
              </MDBCard>
  
              </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText className="mb-4">
                        <span className="text-primary font-italic me-1">
                          assigment
                        </span>{" "}
                        Project Status
                      </MDBCardText>
                      <MDBCardText
                        className="mb-1"
                        style={{ fontSize: ".77rem" }}>
                        Web Design
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={80}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}>
                        Website Markup
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={72}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}>
                        One Page
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={89}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}>
                        Mobile Template
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={55}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}>
                        Backend API
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={66}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText className="mb-4">
                        <span className="text-primary font-italic me-1">
                          assigment
                        </span>{" "}
                        Project Status
                      </MDBCardText>
                      <MDBCardText
                        className="mb-1"
                        style={{ fontSize: ".77rem" }}>
                        Web Design
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={80}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}>
                        Website Markup
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={72}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}>
                        One Page
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={89}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}>
                        Mobile Template
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={55}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}>
                        Backend API
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={66}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MainLayout>
  );
}
}
export default UserHomePage;
