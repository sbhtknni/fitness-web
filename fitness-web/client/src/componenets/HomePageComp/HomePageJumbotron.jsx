import React from "react";
import { Link } from "react-router-dom";

//This component is used to create the jumbotron of the home page
function HomePageJumbotron() {
  return (
    <div className="jumbotron ">
      <div className="container">
        <div className="row ">
          <div className="col-md-8">
            <h1 className="display-3 fw-bolder ">Hello Trainer!</h1>
            <p>
              Achieve your fitness goals with our cutting-edge programs. Join
              our community of fitness enthusiasts and embark on a
              transformative journey towards a stronger, healthier you. Get
              started today and unlock your full potential. Welcome to a world
              of fitness excellence!
            </p>
            <p>
              <Link
                className="btn btn-primary btn-lg"
                to="auth/register"
                role="button"
              >
                Sign Up »
              </Link>
            </p>
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid"
              src="https://deprmqvywv28x.cloudfront.net/fitlovers/homepage-signature.webp"
              alt="Fitness"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePageJumbotron;
