import React from "react";
import { Link } from "react-router-dom";
import getURL from "../../assets/assetsUrls";


function HomeMainSection() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 bg-image hover-zoom overflow-visible">
            <img className="col-md-10" src={getURL("home-page-left")} alt="Banner Left" />
          </div>
          <div className="col-md-4">
            <h2>Already Have an Account?</h2>
            <p>Log in now.</p>
            <p>
              <Link className="col-md-12 btn btn-primary" to="auth/login" role="button">
                Log In  »
              </Link>
            </p>
          </div>
          <div className="col-md-4 bg-image hover-zoom overflow-visible">
            <img  className="col-md-10" src={getURL("home-page-right")} alt="Banner Right" />
          </div>
        </div>
        <hr />
      </div>
    );
}
  export default HomeMainSection;
