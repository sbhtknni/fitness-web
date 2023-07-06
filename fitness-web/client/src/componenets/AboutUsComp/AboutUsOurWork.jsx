/**
 * AboutUsOurWork.jsx is used to render the our work section in about us page
 * This is the last section in the about us page
 * its shows the user what we did in this project
 */
import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import getURL from "../../assets/assetsUrls";


function AboutUsOurWork() {
    return (
        <MDBContainer className="text-center">
            <hr />
            <h1 className="h1 pt-5 pb-3">OUR WORK</h1>
            <p className="px-2 mb-5 pb-3 lead blue-grey-text">
                Our worked was based on react app and his idea to show the new features of web development.
            </p>
            <MDBRow >
                <MDBCol className="min-column">
                <img className="mb-2" src={getURL("analyticsIcon")} alt="" width={50} />
                    <h4>Analytics</h4>
                    <p className="px-2 mb-5 pb-3 lead blue-grey-text">
                        Our analystic in the project is to show the user his progress in the workout plan. he give the user a lot of information and statistics about his progress. 
                        <br />
                        We did a lot of resrech to give the user the best view and what kind of information he need to see.
                    </p>
                </MDBCol>

                <MDBCol className="min-column">
                <img className="mb-2" src={getURL("designIcon")} alt="" width={50} />
                    <h4>Design</h4>
                    <p className="px-2 mb-5 pb-3 lead blue-grey-text">
                        Our design is to give the user the best experience in the website. we used mdbootstrap . our app can be used in mobile and desktop.
                        <br />
                        the app very easy to use and very friendly. he is interactive and the colors are very adjusted to the user.
                    </p>
                </MDBCol>

                <MDBCol className="min-column">
                <img className="mb-2" src={getURL("developmentIcon")} alt="" width={50} />
                    <h4>Development</h4>
                    <p className="px-1 mb-5 pb-3 lead blue-grey-text">
                        Our development is based on react app. we used components to make the app more organized and easy to use.
                        <br />
                        The server side is based on node.js and express.js. we used mongoDB to save the data.
                        The app deployed on varcel and render websites.
                    </p>
                </MDBCol>
            </MDBRow>
            <hr />
           
        </MDBContainer>
    );
}
export default AboutUsOurWork;