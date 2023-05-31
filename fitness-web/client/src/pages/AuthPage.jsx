import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import { useCookies } from "react-cookie";
import MainLayout from "../layout/MainLayout.jsx";
import NavigationBar from "../componenets/NavigationBar.jsx";

export function Login() {
  useEffect(() => {
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  }, []);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setCookies] = useCookies(["access_token"]);
  const [showModal, setShowModal] = useState(false);
  const [modalOption, setModalOption] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3002/auth/login", {
        email: email,
        password: password,
      });

      setModalOption("success");
      setShowModal(true);
      const message = response.data.message;
      setModalMessage(message);
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userId", response.data.userID);

      console.log(response.status);
    } catch (err) {
      setModalOption("error");
      setShowModal(true);
      console.error(err);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setShowModal(false);

    if (modalOption === "success") {
      navigate("/userpage");
    }
  };

  return (
    <>
      <MainLayout>
        <section className="vh-120 gradient-custom" style={{ minHeight: "100vh" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-5">Please enter your login and password!</p>

                      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                        <MDBInput
                          type="email"
                          label="Email"
                          id="email"
                          required
                          value={email}
                          onChange={handleEmailChange}
                        />

                        <MDBInput
                          type="password"
                          label="Password"
                          id="password"
                          required
                          value={password}
                          onChange={handlePasswordChange}
                        />

                        <div className="col-12">
                          <MDBBtn
                            type="submit"
                            color="light"
                            size="lg"
                            className="px-5"
                            data-mdb-toggle="modal"
                            data-mdb-target="#exampleModal"
                          >
                            Submit form
                          </MDBBtn>
                        </div>
                      </form>

                      <p className="small mb-5 pb-lg-2">
                        <a className="text-white-50" href="#!">
                          Forgot password?
                        </a>
                      </p>

                      <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" className="text-white">
                          <i className="fab fa-facebook-f fa-lg"></i>
                        </a>
                        <a href="#!" className="text-white">
                          <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                        </a>
                        <a href="#!" className="text-white">
                          <i className="fab fa-google fa-lg"></i>
                        </a>
                      </div>
                    </div>

                    <div>
                      <p className="mb-0">
                        Don't have an account?{" "}
                        <a href="auth/signup" className="text-white-50 fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
 {/* Modal */}
 <Modal show={showModal} onHide={handleModalClose}   centered>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {modalOption === "error" && (
              <p>
                Error occurred while trying to login, Username or Password incorrect {modalMessage}.
              </p>
            )}
            {modalOption === "success" && <p>Logged In Successfully</p>}
            {modalOption !== "success" && modalOption !== "error" && <p>You need to fill values</p>}
          </Modal.Body>
          <Modal.Footer>
            {modalOption !== "success" && (
              <Button color="secondary" onClick={() => setShowModal(false)} data-mdb-dismiss="modal">
                Close
              </Button>
            )}
            {modalOption === "success" && (
              <Button color="primary" onClick={handleModalClose}>
                Let's GO!
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </MainLayout>
    
       
    </>
  );
}

export default Login;
export function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalOption, setModalOption] = useState("");

  const forms = document.querySelectorAll(".needs-validation");

  (() => {
    "use strict";
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  })();

  // Logic for handling form submission goes here

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Send Post Request to the api
    try {
      const response = await axios.post("http://localhost:3002/auth/register", {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        height: height,
        weight: weight,
      });
      setModalOption("success");
      setShowModal(true);

      // alert(response.status.);
      console.log(response.status);
    } catch (err) {
      //TODO: enter model for error
      setModalOption("error");
      setShowModal(true);
      console.error(err);
    }
  };
  const handleModalClose = () => {
    setShowModal(false);
    if (modalOption === "success") {
      navigate("/auth/login");
    }
  };

  return (
    <>
      <NavigationBar></NavigationBar>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <section
          className="vh-200 gradient-custom"
          style={{ minHeight: "100vh" }}>
          <div className="container py-4 h-100">
            <div className="row d-flex justify-content-center align-items-center h-300">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white">
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-5">Sign up now</h2>
                      {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            {/* <!-- FirstName input --> */}
                            <input
                              type="text"
                              id="FirstName"
                              className="form-control"
                              required
                              onChange={(event) =>
                                setfirstName(event.target.value)
                              }
                            />
                            <label className="form-label" for="typeFirstNameX">
                              First Name
                            </label>
                            <div className="invalid-feedback">
                              Please enter First Name
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            {/* <!-- LastName input --> */}
                            <input
                              type="text"
                              id="LastName"
                              className="form-control"
                              required
                              onChange={(event) =>
                                setLastName(event.target.value)
                              }
                            />
                            <label className="form-label" for="typeLastNameX">
                              Last Name
                            </label>
                            <div className="invalid-feedback">
                              Please enter Last Name
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Email input --> */}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          required
                          onChange={(event) => setEmail(event.target.value)}
                        />
                        <label className="form-label" for="typeEmailX">
                          Email address
                        </label>
                        <div className="invalid-feedback">
                          Please enter a valid email address
                        </div>
                      </div>
                      {/* <!-- Password input --> */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control"
                          id="validationCustom01"
                          required
                          onChange={(event) => setPassword(event.target.value)}
                        />
                        <label for="validationCustom01" className="form-label">
                          Password
                        </label>
                        <div className="invalid-feedback">
                          Please enter Password
                        </div>
                      </div>
                      {/* <!-- Height input --> */}
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="double"
                              id="Height"
                              className="form-control"
                              required
                              min={0}
                              max={210}
                              onChange={(event) =>
                                setHeight(event.target.value)
                              }
                            />
                            <label className="form-label" for="typeHeightX">
                              Height
                            </label>
                            <div className="invalid-feedback">
                              Please enter vaild Height
                            </div>
                          </div>
                        </div>

                        {/* <!-- Weight input --> */}
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="double"
                              id="Weight"
                              className="form-control"
                              required
                              min={0}
                              max={250}
                              onChange={(event) =>
                                setWeight(event.target.value)
                              }
                            />
                            <label className="form-label" for="typeWeightX">
                              Weight
                            </label>
                            <div className="invalid-feedback">
                              Please enter Weight
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Submit button --> */}
                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                        data-mdb-toggle="modal"
                        data-mdb-target="#exampleModal">
                        Sign Up
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-5 mb-lg-0">
                <img
                  src="https://nowosci.beactivetv.pl/wp-content/themes/beactive/img/fitlovers/fitlovers-photo.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Two Options to SHow */}
          {modalOption === "error" && <p>Fill ALL Fields .</p>}
          {modalOption === "success" && (
            <p>Signed Up Successfully , Let's Log In!</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          {modalOption === "success" && (
            <Button variant="primary" onClick={handleModalClose}>
              {" "}
              OK{" "}
            </Button>
          )}
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
