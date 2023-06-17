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
  MDBCardHeader,
  MDBCardTitle,
  MDBCardFooter,
  MDBCardImage,
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
import DetailsCard from "../componenets/UserPageComp/DetailsCard.jsx";

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
      if (response === []) {
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
        setTrainingNames(
          user.selectedTrainings.map((training) => training.name)
        );
        calculateStatistics();
      }
    };

    const calculateStatistics = () => {
      console.log("Weights ", weights);
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
  } else {
    return (
      <MainLayout>
        <section style={{ backgroundColor: "#eee" }}>
          <MDBContainer className="py-5">
            <MDBRow>
              {/* Profile Picture Cube */}
              <ProfilePicture user={user} />

              <MDBCol lg="8">
                {/* User Details Card  */}

                <DetailsCard user={user} />

                {/* <MDBRow>
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
                </MDBRow> */}
                <MDBRow className="row-cols-1 row-cols-md-3 g-4">
                  <MDBCol>
                    <MDBCard className="h-100">
                      <MDBCardImage
                        src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                        alt="..."
                        position="top"
                      />
                      <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </MDBCardText>
                      </MDBCardBody>
                      <MDBCardFooter>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </MDBCardFooter>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard className="h-100">
                      <MDBCardImage
                        src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                        alt="..."
                        position="top"
                      />
                      <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                          This card has supporting text below as a natural
                          lead-in to additional content.
                        </MDBCardText>
                      </MDBCardBody>
                      <MDBCardFooter>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </MDBCardFooter>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard className="h-100">
                      <MDBCardImage
                        src="https://mdbootstrap.com/img/new/standard/city/042.webp"
                        alt="..."
                        position="top"
                      />
                      <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This card has
                          even longer content than the first to show that equal
                          height action.
                        </MDBCardText>
                      </MDBCardBody>
                      <MDBCardFooter>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </MDBCardFooter>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              
              <MDBCol  sm="6" className="h-25 mb-4 mb-md-2">
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

              <MDBCol sm="6" className="h-25 mb-4 mb-md-2">
                <MDBCard className="h-100">
                  <MDBCardHeader className="fw-bolder text-center">
                    Weight Linear Graph
                  </MDBCardHeader>
                  <MDBCardBody>
                    <GraphComponent
                      selectedTrainings={user.selectedTrainings}
                    />
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

            </MDBRow>
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This card has supporting text below as a natural lead-in to additional content.
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              card has even longer content than the first to show that equal height action.
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow>
            
            
          </MDBContainer>
        </section>
      </MainLayout>
    );
  }
}
export default UserHomePage;
