import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../componenets/NavigationBar.jsx";
//For fetching api
import axios from "axios";
import { useCookies } from "react-cookie";
import MainLayout from "../layout/MainLayout.jsx";
import { Modal, Button } from "react-bootstrap";

// bootstrap imports
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBValidation,
  MDBValidationItem,
  
} from "mdb-react-ui-kit";

export function Login(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setCookies] = useCookies(["access_token"]);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState(false);
  const [submittedPassword, setSubmittedPassword] = useState(false);
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
      setModalMessage(response.data.message);
      console.log("Login", response.data);
      window.localStorage.setItem("access_token", response.data.token);
      window.localStorage.setItem("userId", response.data.userID);

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
        <MDBContainer fluid onSubmit={handleSubmit}  >
          <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>
          <MDBRow className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol col='12'>
              <MDBCard className='bg-dark text-white mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px',marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }} >
                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>
                  <MDBValidation className='row g-3' >
                    <MDBValidationItem feedback='Please choose a Email.' invalid className='col-md-12' >
                      <MDBInput
                        value={email}
                        name='email'
                        onChange={handleEmailChange}
                        id='email'
                        required
                        label='Email address'
                        type='email'
                        size="lg"
                        labelClass='text-white'
                        style={{ color: 'white' }}
                      />
                    </MDBValidationItem>
                    <MDBValidationItem feedback='Please choose a Password.' invalid className='col-md-12'>
                      <MDBInput
                        value={password}
                        name='password'
                        onChange={handlePasswordChange}
                        id='password'
                        required
                        label='Password'
                        type='password'
                        size="lg"
                        labelClass='text-white'
                        inputClass='text-white'
                        style={{ color: 'white' }}
                      />
                    </MDBValidationItem>
                    <div className="d-flex justify-content-center">
                      <MDBBtn
                        outline
                        className='mx-2 px-5'
                        color='white'
                        size='lg'
                        type='submit'
                        inputClass='text-white'
                        data-mdb-toggle="modal"
                        data-mdb-target="#exampleModal"
                        style={{ margin: '2vh' }}>
                        Login
                      </MDBBtn>
                    </div>
                  </MDBValidation>

                  <div>
                    <p className="mb-0">Don't have an account? <a href="register" class="text-white-50 fw-bold">Sign Up</a></p>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton={modalOption === "error"}>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {/* Two Options to SHow */}
            {modalOption === "error" && (
              <p>
                Error occurred while trying to login , User Name or Password
                Incorrect {modalMessage} .
              </p>
            )}
            {modalOption === "success" && <p>Logged In Successfully </p>}
          </Modal.Body>
          <Modal.Footer>
            {modalOption === "success" && (
              <Button variant="primary" onClick={handleModalClose}>
                {" "}
                OK{" "}
              </Button>
            )}
            {modalOption !== "success" && (
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </MainLayout>
    </>
  );
}

export default Login;


// Register Page
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
      
      <MainLayout >
        <MDBContainer onSubmit={handleSubmit}  >
          
          <MDBRow className='g-0 align-items-center ' >
           
            <MDBCol col='5'>
              <MDBCard className='bg-dark text-white my-5 cascading-right ' style={{margin: '-15px', background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}  >
                <MDBCardBody className='p-5 shadow-5 text-center'>
                  <h2 className="fw-bold mb-5 text-uppercase">Sign up  now</h2>
                  <MDBValidation className='row g-3 align-items-center' >
                    <MDBRow col='3'>
                      <MDBCol col='3'>
                        <MDBValidationItem feedback='Please choose First name.' invalid  >

                          <MDBInput
                            value={firstName}
                            name='FirstName'
                            onChange={(event) => setfirstName(event.target.value)}
                            id='FirstName'
                            required
                            label="First Name"
                            type="text"
                            size="lg"
                            wrapperClass='mb-4'
                            labelClass='text-white'
                          />
                        </MDBValidationItem>
                      </MDBCol>


                      <MDBCol col='4'>
                        <MDBValidationItem feedback='Please choose a Last name.' invalid  >
                          <MDBInput
                            value={lastName}
                            name='LastName'
                            onChange={(event) => setLastName(event.target.value)}
                            id='LastName'
                            required
                            label="Last Name"
                            type="text"
                            size="lg"
                            wrapperClass='mb-4'
                            labelClass='text-white'
                          />
                        </MDBValidationItem>
                      </MDBCol>
                    </MDBRow>


                    <MDBRow col='5'>
                      <MDBValidationItem feedback='Please choose a Email.' invalid  >
                        <MDBInput
                          value={email}
                          name='email'
                          onChange={(event) => setEmail(event.target.value)}
                          id='email'
                          required
                          label='Email'
                          type='email'
                          size="lg"
                          wrapperClass='mb-4'
                          labelClass='text-white'
                        />
                      </MDBValidationItem>
                    </MDBRow>

                    <MDBRow col='5'>
                      <MDBValidationItem feedback='Please choose a Password.' invalid  >
                        <MDBInput
                          value={password}
                          name='password'
                          onChange={(event) => setPassword(event.target.value)}
                          id='password'
                          required
                          label='Password'
                          type='password'
                          size="lg"
                          wrapperClass='mb-4'
                          labelClass='text-white'
                        />
                      </MDBValidationItem>
                    </MDBRow>
                    <MDBRow >

                      <MDBCol col='5'>
                        <MDBValidationItem feedback='Choose height between 0-210' invalid  >

                          <MDBInput
                            value={height}
                            name='Height'
                            onChange={(event) => setHeight(event.target.value)}
                            id='Height'
                            required
                            label='Height'
                            type='number'
                            min={0}
                            max={210}
                            size="lg"
                            wrapperClass='mb-4'
                            labelClass='text-white'
                          />

                        </MDBValidationItem>
                      </MDBCol>


                      <MDBCol col='5'>
                        <MDBValidationItem feedback='Choose Weight between 0-250' invalid >
                          <MDBInput
                            value={weight}
                            name='Weight'
                            onChange={(event) => setWeight(event.target.value)}
                            id='Weight'
                            required
                            min={0}
                            max={250}
                            label='Weight'
                            type='number'
                            size="lg"
                            wrapperClass='mb-4'
                            labelClass='text-white'
                          />
                        </MDBValidationItem>
                      </MDBCol>
                    </MDBRow>

                    <div style={{ marginBottom: '20px' }}>
                      <MDBBtn
                        outline
                        className='mx-2 px-5'
                        color='white'
                        size='lg'
                        type='submit'
                        data-mdb-toggle="modal"
                        data-mdb-target="#exampleModal"
                      >
                        Register
                      </MDBBtn>
                    </div>
                  </MDBValidation>

                  <div >
                    <p className="mb-0"> Have an account? <a href="login" class="text-white-50 fw-bold"> Log in</a></p>

                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol col="5">
              <img
                src="https://nowosci.beactivetv.pl/wp-content/themes/beactive/img/fitlovers/fitlovers-photo.png"
                class="w-100 rounded-4 shadow-10"
                alt=""
                fluid
               
               />
            </MDBCol>
            
          </MDBRow>
        </MDBContainer>

        
        

        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {modalOption === 'success' ? 'Registration Successful' : 'Registration Failed'}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </MainLayout>

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
