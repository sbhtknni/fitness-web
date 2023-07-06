/**
 *  This file exports the UserHomePage functional component which displays the user's home page.
 *  The component is used in UserHomePage.jsx.
 *  The component uses the following components:
 * - Footer.jsx
 * - ProfilePicture.jsx
 * - WeightsPerDateGraph.jsx
 * - DayesPerProgramGraph.jsx
 * - UsagePercentageOfProgramsGraph.jsx
 * - DetailsCard.jsx
 * - BigCard.jsx
 * - ExpertCard.jsx
 */
import React from "react";
import Footer from "../GeneralComp/Footer.jsx";
import ProfilePicture from "../UserHomePageComp/ProfilePicture.jsx";
import GraphComponent from "../UserHomePageComp/WeightsPerDateGraph.jsx";
import DayesPerProgramGraph from "../UserHomePageComp/DayesPerProgramGraph.jsx";
import ChartTrainigGraph from "../UserHomePageComp/UsagePercentageOfProgramsGraph.jsx";
import DetailsCard from "../UserHomePageComp/DetailsCard.jsx";
import BigCard from "../UserHomePageComp/BigCard.jsx";
import getURL from "..//..//assets/assetsUrls.js";
import ExpertCard from "../UserHomePageComp/ExpertCard.jsx";

import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
} from "mdb-react-ui-kit";

// UserHomePageForm function 
function UserHomePageForm({ data, user, height, setHeight, fetchUser }) {
    return (
        <MDBContainer className="py-4">
            <MDBRow className="py-2 g-4">
                {/* Profile Picture Cube */}
                <ProfilePicture user={user} />
                <MDBCol md="9">
                    {/* User Details Card  */}
                    <DetailsCard
                        user={user}
                        height={height}
                        setHeight={setHeight}
                        training={data.currentTraining}
                        color={data.normalWeight.color}
                        fetchUser={fetchUser}
                    />
                    {/* Include Max and Min Weight */}
                </MDBCol>
            </MDBRow>

            {/* first row with 3 cards */}
            <MDBRow className="py-4 g-4">
                {/*Weight Statistics card */}
                <BigCard
                    title="Weight Statistics"
                    // set text to be 'You need to work one more time to see the data' if weights is empty else set it to the data
                    text={
                        data.weights.length === 0
                            ? "You need to work one more time to see the data"
                            : `#Max Weight $${data.max.toFixed(
                                2
                            )} kg$  \n #Min Weight $${data.min.toFixed(
                                2
                            )} kg$ \n #Average Weight $${data.average
                            } kg$ \n #Weight Loss $${data.weightLoss}$ \n`
                    }
                    img_src={getURL("weight")}
                />
                {/* Bmi Statistics card */}
                <BigCard
                    title="Bmi Statistics"
                    text={
                        data.weights.length === 0
                            ? "You need to work one more time to see the data"
                            : data.normalWeight.message
                    }
                    img_src={getURL("statistics")}
                    picture="https://nutrition.health.gov.lk/wp-content/uploads/2020/12/BMI-1024x569.png"
                    fillPicture={true}
                />
                {/* Popular Training card */}
                <BigCard
                    title="Popular Training"
                    text={
                        data.weights.length === 0
                            ? "You need to work one more time to see the data"
                            : `$${data.popularName}$  #Current Training $${data.currentTraining}$  #Weight Loss Per Program ${data.weightLossPerProgram} \n `
                    }
                    img_src={getURL("workout")}
                />
            </MDBRow>

            {/* second row with 2 cards */}
            <MDBRow className=" row-cols-md-2 g-4 py-4">
                <MDBCol md="4">

                    {/*Usage percentage of programs graph */}
                    <MDBCard className="h-100">
                        <MDBCardHeader className="fw-bolder text-center">
                            Usage percentage of programs
                        </MDBCardHeader>
                        <MDBCardBody >
                            {data.weights.length === 0 ? (
                                <p className="text-center fw-bolder">You need to work one more time to see the data</p>
                            ) : (
                                <ChartTrainigGraph
                                    selectedTrainings={user.selectedTrainings}
                                />
                            )}
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                {/* Expert card that sgow the table*/}
                {data.weights.length < 3 ? (
                    <MDBCol md="8">
                        <MDBCard className="h-100">
                            <MDBCardHeader className="fw-bolder text-center">
                                Expert
                            </MDBCardHeader>
                            <MDBCardBody>
                                <p className="text-center fw-bolder">You need to work at least 3 trainings</p>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    
                ) : (
                    <ExpertCard data={data.averageWeightLossPerProgram} />
                )}
                    </MDBRow>
                {/* third row with 2 cards */}
                <MDBRow className="py-4 g-4">

                    {/* Weights Per Training graph */}
                    <MDBCol>
                        <MDBCard>
                            <MDBCardHeader className="fw-bolder text-center">
                                Weights Per Training
                            </MDBCardHeader>
                            <MDBCardBody>
                                {data.weights.length < 2 ? (
                                    <p className="text-center fw-bolder">You need to work one more time to see the data</p>
                                ) : (
                                    <GraphComponent
                                        selectedTrainings={user.selectedTrainings}
                                    />
                                )}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    {/* Total Days Per Program graph */}
                    <MDBCol>
                        <MDBCard >
                            <MDBCardHeader className="fw-bolder text-center">
                                Total Days Per Program
                            </MDBCardHeader>
                            <MDBCardBody >
                                {data.weights.length < 2 ? (
                                    <p className="text-center fw-bolder">You need to work one more time to see the data</p>
                                ) : (
                                    <DayesPerProgramGraph
                                        dataArr={data.averageWeightLossPerProgram}
                                    />
                                )}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                <hr />
                <Footer />
        </MDBContainer>
    );
}
export default UserHomePageForm;
