import React from "react";
import MainLayout from "../layout/MainLayout.jsx";
import HomePageJumbotron from "../componenets//HomePageComp//HomePageJumbotron.jsx";
import HomeMainSection from "../componenets//HomePageComp//HomeMainSection.jsx";
import Footer from "..//componenets//GeneralComp//Footer.jsx";
//Home page component that is used to display the home page of the website
//Includes the jumbotron and the main section of the home page
function HomePage() {
  return (
    <MainLayout>
      <div className="semi_transperent vsc-initialized ">
        <main role="main">
          <HomePageJumbotron />
        </main>
      </div>
      <HomeMainSection />
      <Footer />
    </MainLayout>
  );
}
export default HomePage;
