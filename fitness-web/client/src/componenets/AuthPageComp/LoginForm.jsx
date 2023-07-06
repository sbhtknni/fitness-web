/**
 * login form component
 * It is used in LoginComponent.jsx
 * It shows the login form 
 * 
 */
import React from "react";

// bootstrap imports
import {
  MDBBtn,
  MDBInput,
  MDBValidation,
  MDBValidationItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";

// login form component function
// it shows the login form and handles the login process
function LoginForm({ email, password, handleEmailChange, handlePasswordChange, handleSubmit }) {
  return (
    <MDBContainer onSubmit={handleSubmit} >

      <MDBRow className="g-0 align-items-center ">

        <MDBCol>
          <MDBCard
            className="bg-dark text-white mx-auto mb-10 "
            style={{
              margin: "120px",
              borderRadius: "1rem",
              maxWidth: "400px",

            }}>
            <MDBCardBody className="addcard p-5 d-flex flex-column align-items-center  ">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your login and password!
              </p>

              <MDBValidation className='row g-3 align-items-center' >
                <MDBRow>

                  <MDBValidationItem
                    feedback='Please choose an Email.'
                    invalid >
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
                      wrapperClass="mb-4"

                    />
                  </MDBValidationItem>
                </MDBRow >

                <MDBRow>

                  <MDBCol >
                    <MDBValidationItem feedback='Please choose a Password.' invalid >
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
                        style={{ color: 'white' }}
                        wrapperClass="mb-4"

                      />
                    </MDBValidationItem>
                  </MDBCol>

                </MDBRow >

                <div className="d-flex justify-content-center">
                  <MDBBtn
                    outline
                    className='mx-2 px-5'
                    color='white'
                    size='lg'
                    type='submit'
                    data-mdb-toggle="modal"
                    data-mdb-target="#exampleModal"
                    style={{ margin: '2vh' }}
                  >
                    Login
                  </MDBBtn>
                </div>

              </MDBValidation>

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
    </MDBContainer>
  );
}
export default LoginForm;