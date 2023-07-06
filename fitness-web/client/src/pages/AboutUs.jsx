import React from "react";
import MainLayout from "../layout/MainLayout.jsx";
import AboutGeneral from "../componenets/AboutUsComp/AboutGeneral.jsx";
import AboutUsOurTeam from "../componenets/AboutUsComp/AboutUsOurTeam.jsx";
import AboutUsHeader from "../componenets/AboutUsComp/AboutUsHeader.jsx";
import AboutUsOurWork from "../componenets/AboutUsComp/AboutUsOurWork.jsx";
import Footer from "../componenets/GeneralComp/Footer.jsx";
//Home page component that is used to display the home page of the website
//Includes the jumbotron and the main section of the home page
function AboutUs() {
  return (
    <MainLayout>
      <AboutUsHeader />
      <AboutGeneral />
      <AboutUsOurTeam />
      <AboutUsOurWork />
      <Footer/>
    </MainLayout>
  );
}
export default AboutUs;
