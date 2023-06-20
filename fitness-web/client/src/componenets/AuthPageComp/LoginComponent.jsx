import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginModal from "./LoginModal";
import MainLayout from "../../layout/MainLayout";
import Footer from "..//General/Footer.jsx";
import "..//..//assets/App.css";

// bootstrap imports
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { login } from "../../controller/requests";

// Login Function  login to the app
function LoginComponent() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalOption, setModalOption] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      // Show modal based on login result
      setShowModal(true);
      setModalOption("success"); // or 'error'
      setModalMessage("Invalid credentials"); // Set the appropriate message
      window.localStorage.setItem("access_token", response.data.token);
      window.localStorage.setItem("userId", response.data.userID);
    } catch (err) {
      setModalOption("error");
      setShowModal(true);
      console.error(err);
    }
  };

  const handleEmailChange = async (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleModalClose = () => {
    setShowModal(false);
    if (modalOption === "success") {
      navigate("/userpage");
    }
  };

  return (
      <MainLayout >
        <MDBContainer fluid onSubmit={handleSubmit}>
          {/* <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', borderRadius: '10px', margin: '2vh', height: '300px' }}></div> */}
          {/* <div style={{  backgroundImage: `url(${background})`, borderRadius: '10px' }} > */}

          <MDBRow className="d-flex justify-content-center align-items-center ">
            <MDBCol col="12">
              <br />
              <MDBCard
                className="bg-dark text-white mx-auto mb-10 "
                style={{
                  margin: "120px",
                  borderRadius: "1rem",
                  maxWidth: "400px",

                }}>
                <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>
                  <LoginForm
                    email={email}
                    password={password}
                    handleEmailChange={handleEmailChange}
                    handlePasswordChange={handlePasswordChange}
                    handleSubmit={handleSubmit}
                  />
                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <a href="register" className="text-white-50 fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <LoginModal
            showModal={showModal}
            modalOption={modalOption}
            modalMessage={modalMessage}
            handleModalClose={handleModalClose}
            setShowModal={setShowModal}
          />

          <hr />
          <Footer />
        </MDBContainer>
      </MainLayout>

  );
}

export default LoginComponent;
