/**
 * @file AboutUsHeader.jsx is the header component for the AboutUsComp component.
 * This is the first section in the about us page
 */
import React from "react";
//About us header component that is used to display the header of the about us page including the jumbotron and the background image
function AboutUsHeader() {
  return (
    <div id="home" className="view jarallax" data-jarallax='{"speed": 0.2}' style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://mdbootstrap.com/img/Photos/Others/img%20%2853%29.jpg)", backgroundRepeat: "no-repeat", height: "60vh", backgroundSize: "cover", backgroundPosition: "center center" }}>
      <div className="container h-100 d-flex justify-content-center align-items-center position-relative">
        <div className="row pt-5 mt-3">
          <div className="col-md-12 mb-3">
            <div className="intro-info-content text-center">
              <h1 className="display-3 white-text mb-5 wow fadeInDown" data-wow-delay="0.3s">ABOUT <a className="white-text font-weight-bold">US</a></h1>
              <h5 className="text-uppercase white-text mb-5 mt-1 font-weight-bold wow fadeInDown" data-wow-delay="0.3s">Welcome to our Fitness-Web app</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUsHeader;