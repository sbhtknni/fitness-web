/**
 * AboutGeneral.jsx is the general info about the website
 * this is the seconed section in the about us page
 */
import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import getURL from "../../assets/assetsUrls";


//About us general component that is used to display the general information about the website
//Includes the info and how to use sections , 
const AboutGeneral = () => {
    console.log(getURL("infoIcon"))
    return (
        
        <MDBContainer className="wow fadeIn text-center py-4">
            <h1 className="h1 pt-5 pb-3">OUR PRODUCT</h1>
            <MDBRow>
                <MDBCol className="min-column">
                    <h2 className="h2 pt-5 pb-2">INFO</h2>
                    <img className="mb-2" src={getURL("infoIcon")} alt="picture" width={50} />
                    <p className="px-2 mb-5 pb-3 lead blue-grey-text">
                        In this webstite you can acheive your fitness goals by creating a workout plan and tracking your progress.
                        You can also find a variety of exercises and workouts to add to your plan , and learn about the different muscle groups.
                    </p>
                </MDBCol>
                <MDBCol className="min-column">
                    <h2 className="h2 pt-5 pb-2">HOW TO USE</h2>
                    <img className="mb-2" src={getURL("HowToUseIcon")} alt="picture" width={50} />
                    <p className="px-2 mb-5 lead blue-grey-text">
                        After resigtering and logging in, you can create a workout plan by clicking on the "Create Workout Plan" button and insert your current weight .
                    <br />
                        Based on the weight and training plan , you can view information and statistics on the user page about your progress.
                    </p>
                </MDBCol>

                <h3 className="h3 pt-3 px-5 mb-2 pb-3 ">
                    Hope you enjoy our project!</h3>

                
            </MDBRow>
        </MDBContainer >
    );
};

export default AboutGeneral;
